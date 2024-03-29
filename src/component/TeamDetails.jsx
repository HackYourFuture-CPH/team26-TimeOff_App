import React, { useState, useEffect } from 'react';
import '../index.css';
import MembersList from './MembersList';
import TimeoffList from './TimeoffList';
import AddMember from './CreateMember';
import TimeoffForm from './TimeoffForm';

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
      const response = await fetch(`http://localhost:4050/api/teams/${team.id}/members`);
      if (!response.ok) {
        throw new Error('Failed to fetch team members');
      }
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error('Error fetching team members:', error);
    }
  };

  const fetchTimeOffs = async () => {
    try {
      const response = await fetch(`http://localhost:4050/api/teams/${teams.id}/timeoff`);
      if (!response.ok) {
        throw new Error('Failed to fetch time offs');
      }
      const data = await response.json();
      setTimeOffs(data);
    } catch (error) {
      console.error('Error fetching time offs:', error);
    }
  };

  const handleAddMember = async (memberData) => {
    try {
      const response = await fetch(`http://localhost:4050/api/teams/${teams.id}/members`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(memberData),
      });
      if (!response.ok) {
        throw new Error('Failed to add member');
      }
      fetchTeamMembers();
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  const handleAddTimeOff = async (timeOffData) => {
    try {
      const response = await fetch(`http://localhost:4050/api/teams/${teams.id}/timeoff`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(timeOffData),
      });
      if (!response.ok) {
        throw new Error('Failed to add time off');
      }
      fetchTimeOffs();
    } catch (error) {
      console.error('Error adding time off:', error);
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
      <AddMember onAddMember={handleAddMember} />
      <h3>Time Off Requests</h3>
      <TimeoffList timeOffs={timeOffs} />
      <TimeoffForm onAddTimeOff={handleAddTimeOff} />
    </div>
  );
};

export default TeamDetails;
