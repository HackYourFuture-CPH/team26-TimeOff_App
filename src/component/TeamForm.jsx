import { useState, useEffect } from 'react';

const TeamForm = () => {
  const [teamCode, setTeamCode] = useState('');
  const [teams, setTeams] = useState([]);

  const handleInputChange = (event) => {
    setTeamCode(event.target.value);
  };

  const handleSubmit = () => {
    const team = teams.find(team => team.code === teamCode);
    if (team) {
      window.alert(`Log in ${team.name}`);
    } else {
      window.alert('Invalid team code');
    }
  };

  const handleCreateTeam = () => {
    const randomName = `Team ${Math.floor(Math.random() * 100)}`;
    const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    const newTeam = { id: teams.length + 1, name: randomName, code: randomCode };
    
    setTeams(prevTeams => [...prevTeams, newTeam]);

    setTeamCode(randomCode);
    window.alert(`New team created: ${randomName} (Code: ${randomCode})`);

    console.log('Updated teams list:', teams);
  };

  return (
    <div>
      <h2>Time Off</h2>
      <div>
        <label htmlFor="teamCodeInput">Join with:</label>
        <input
          type="text"
          id="teamCodeInput"
          placeholder="team code"
          value={teamCode}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleCreateTeam}>Create Team</button>
    </div>
  );
};

export default TeamForm;