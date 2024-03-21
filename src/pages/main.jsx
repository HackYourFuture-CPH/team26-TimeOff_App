import { useState } from 'react';
import SubmitTeam from '../component/SubmitTeam';
import CreateTeam from '../component/CreateTeam';
import '../index.css';

const database = [
  { id: 1, name: 'Team A', code: 'ABC123' },
  { id: 2, name: 'Team B', code: 'DEF456' },
  { id: 3, name: 'Team C', code: 'GHI789' }
];

const Main = () => {
  const [teamCode, setTeamCode] = useState('');
  const [teamsDatabase, setTeamsDatabase] = useState(database);

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
