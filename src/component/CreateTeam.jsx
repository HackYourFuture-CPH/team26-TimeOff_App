const CreateTeam = ({ teamsDatabase, setTeamsDatabase, setTeamCode }) => {
  const handleCreateTeam = () => {
    const randomName = `Team ${Math.floor(Math.random() * 100)}`;
    const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    const newTeam = { id: teamsDatabase.length + 1, name: randomName, code: randomCode };
    
    setTeamsDatabase([...teamsDatabase, newTeam]);
    setTeamCode(randomCode);
    window.alert(`New team created: ${randomName} (Code: ${randomCode})`);
  };

  return (
    <button className="create-button" onClick={handleCreateTeam}>Create Team</button>
  );
};

export default CreateTeam;
