import { useState, useEffect } from 'react';
import SubmitTeam from '../component/SubmitTeam';
import CreateTeam from '../component/CreateTeam';
import './main.css';


const Main = () => {
  const [teamCode, setTeamCode] = useState('');
  const [teamsDatabase, setTeamsDatabase] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);
  const fetchTeams = async () => {
    try {
      const response = await fetch('http://localhost:4050/api/teams'); // Adjust URL as needed
      if (!response.ok) {
        throw new Error('Failed to fetch teams');
      }
      const teams = await response.json();
      setTeamsDatabase(teams);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  return (
    <div className="top-Header">
      <h2>Time Off</h2>
      <SubmitTeam teamCode={teamCode} teamsDatabase={teamsDatabase} />
      <CreateTeam
        teamsDatabase={teamsDatabase}
        setTeamsDatabase={setTeamsDatabase}
        setTeamCode={setTeamCode}
      />
    </div>
  );
};

export default Main;
