import React, { useState, useEffect } from "react";
import Member from "./Member";
// use this format if fetching
import { apiPath } from '../api';
// fetch(apiPath('/teams'))
const MembersList = ({teamId}) => {
  const [members, setMembers] = useState([]);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="containerList">
      <div className="titleContainer">
        <h4>Here is a list of your team members!</h4>
      </div>
      <div className="members-grid">
        {members.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default MembersList;
