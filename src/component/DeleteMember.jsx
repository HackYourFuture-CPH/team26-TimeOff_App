import { useContext, useEffect, useState } from 'react';
import { apiPath } from '../api';
import { MyContext } from '../component/Context';
import { useParams } from 'react-router-dom';
import '../styles/deleteMember.css';

const DeleteMember = () => {
  const { members, teams } = useContext(MyContext);
  const [selectedMember, setSelectedMember] = useState('');
  const [filteredMembers, setFilteredMembers] = useState([]);
  const { code } = useParams(); 
  const [teamId, setTeamId] = useState(null);

  useEffect(() => {
    const team = teams.find(team => team.team_code === code);
    if (team) {
      setTeamId(team.id);
    } else {
      console.error(`Team with code '${code}' not found.`);
    }
  }, [code, teams]);

  useEffect(() => {
    if (teamId) {
      const filtered = members.filter(member => member.team_id === teamId);
      setFilteredMembers(filtered);
    }
  }, [teamId, members]);

  const handleDeleteMember = async () => {
  if (!selectedMember) {
    alert('Please select a member');
    return;
  }

  const confirmDelete = window.confirm('Are you sure you want to delete this member?');
  if (confirmDelete) {
    try {
      const response = await fetch(apiPath('/members'), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: selectedMember })
      });

      if (response.ok) {
        const updatedMembers = filteredMembers.filter(member => member.id !== selectedMember);
        setFilteredMembers(updatedMembers);
        alert('Member deleted successfully');
      } else {
        alert('Failed to delete member. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting member:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  }
};


  const handleMemberChange = (e) => {
    setSelectedMember(e.target.value);
  };

  return (
    <div className="deleteMember-container">
      <label htmlFor="memberSelect">Select Member:</label>
      <select className='deleteMember-select' id="memberSelect" value={selectedMember} onChange={handleMemberChange}>
        <option value="">Select a member</option>
        {filteredMembers.map(member => (
          <option key={member.id} value={member.id}>{`${member.first_name} ${member.last_name}`}</option>
        ))}
      </select>
      <button onClick={handleDeleteMember}>Delete Member</button>
    </div>
  );
};

export default DeleteMember;
