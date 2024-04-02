import React, { useState, useEffect } from 'react';
import SubmitTeam from '../component/SubmitTeam';
import CreateTeam from '../component/CreateTeam';
import CreateMember from '../component/CreateMember';
import '../index.css';

const Main = () => {
  const [teamsDatabase, setTeamsDatabase] = useState([]);
  const [membersDatabase, setMembersDatabase] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    fetchTeams();
    fetchMembers();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await fetch('/api/teams');
      if (!response.ok) {
        throw new Error('Failed to fetch teams');
      }
      const teams = await response.json();
      setTeamsDatabase(teams);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  const fetchMembers = async () => {
    try {
      const response = await fetch('/api/members');
      if (!response.ok) {
        throw new Error('Failed to fetch members');
      }
      const members = await response.json();
      setMembersDatabase(members);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  return (
    <div className="top-Header">
      <h2>Time Off</h2>
      <SubmitTeam teamsDatabase={teamsDatabase} />
      <CreateTeam setTeamsDatabase={setTeamsDatabase} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <CreateMember teamsDatabase={teamsDatabase} setMembersDatabase={setMembersDatabase} />
      )}
    </div>
  );
};

export default Main;
