import { useState } from 'react';

const SubmitTeam = ({ teamCode, teamsDatabase }) => {
  const [inputCode, setInputCode] = useState('');

  const handleInputChange = (event) => {
    setInputCode(event.target.value);
  };

  const handleSubmit = () => {
    const team = teamsDatabase.find((team) => team.code === inputCode);
    if (team) {
      window.alert(`Log in ${team.name}`);
    } else {
      window.alert('Invalid team code');
    }
  };

  return (
    <div>
      <label htmlFor="teamCodeInput">Team Code:</label>
      <input
        type="text"
        id="teamCodeInput"
        value={inputCode}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SubmitTeam;
