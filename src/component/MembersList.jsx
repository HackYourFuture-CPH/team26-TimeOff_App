import React, { useState, useEffect } from "react";
import Member from "./Member";
import { apiPath } from '../api';

const MembersList = ({ teamId }) => {
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiPath('/members'))
      .then((response) => response.json())
      .then((data) => {
        setMembers(data.filter(member => member.team_id === teamId));
      })
      .catch((error) => {
        console.error("Error fetching members:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const toggleMemberSelection = (memberId) => {
    setSelectedMembers((prevSelected) => {
      if (prevSelected.includes(memberId)) {
        return prevSelected.filter(id => id !== memberId);
      } else {
        return [...prevSelected, memberId];
      }
    });
  };

  const handleDeleteSelectedMembers = async () => {
    try {
      for (const memberId of selectedMembers) {
        const response = await fetch(apiPath(`/members/${memberId}`), {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to delete member with ID ${memberId}`);
        }
      }

      setMembers(prevMembers => prevMembers.filter(member => !selectedMembers.includes(member.id)));
      setSelectedMembers([]);
      console.log('Selected members deleted successfully.');
    } catch (error) {
      console.error('Error deleting selected members:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="containerList">
      <div className="titleContainer">
        <h4>Here is a list of your team members!</h4>
        {selectedMembers.length > 0 && (
          <button onClick={handleDeleteSelectedMembers}>Delete Selected Members</button>
        )}
      </div>
      <div className="members-grid">
        {members.map((member) => (
          <div key={member.id} className="member-item">
            <input
              type="checkbox"
              checked={selectedMembers.includes(member.id)}
              onChange={() => toggleMemberSelection(member.id)}
            />
            <Member member={member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersList;
