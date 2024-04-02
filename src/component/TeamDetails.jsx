import React, { useState, useEffect } from 'react';
import '../index.css';
import MembersList from './MembersList';
import CreateMember from './CreateMember';

const TeamDetails = ({ teams }) => {
  const [members, setMembers] = useState([]);
  const [timeOffs, setTimeOffs] = useState([]);

  useEffect(() => {
    if (teams) {
      fetchTeamMembers();
      fetchTimeOffs();
    }
  }, [teams]);

  const fetchTeamMembers = async () => {
    try {
      const response = await fetch(`/api/teams/${team.id}/members`);
      if (!response.ok) {
        throw new Error('Failed to fetch team members');
      }
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error('Error fetching team members:', error);
    }
  };

  
  return (
    <div>
      {teams && (
        <>
          <h2>{teams.team_name}</h2>
        </>
      )}
      <h3>Team Members</h3>
      <MembersList members={members} />
      <CreateMember onAddMember={handleAddMember} />
      <h3>Time Off Requests</h3>

    </div>
  );
};

export default TeamDetails;
