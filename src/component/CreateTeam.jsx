import './CreateTeam.css';


const CreateTeam = ({ setTeamsDatabase, setTeamCode }) => {
  const handleCreateTeam = async () => {
    try {
      const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();

      const title = prompt("Enter new team name:");

      if (!title) {
        return;
      }

      const response = await fetch('http://localhost:4050/api/teams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: title, code: randomCode }) // Cambio aquí
      });

      if (!response.ok) {
        throw new Error('Failed to create team');
      }

      setTeamsDatabase(prevTeams => [...prevTeams, { id: prevTeams.length + 1, title, code: randomCode }]);
      setTeamCode(randomCode);
      window.alert(`New team created: ${title} (Code: ${randomCode})`);
    } catch (error) {
      console.error('Error creating team:', error);
      window.alert('Failed to create team');
    }
  };

  return (
    <button className="create-button" onClick={handleCreateTeam}>Create Team</button>
  );
};

export default CreateTeam;
