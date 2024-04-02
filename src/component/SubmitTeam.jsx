import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const SubmitTeam = () => { 
  const navigate = useNavigate();
  const [inputCode, setInputCode] = useState('');

  const handleInputChange = (event) => {
    setInputCode(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/teams');
      if (!response.ok) {
        throw new Error('Failed to fetch teams');
      }
      const teams = await response.json();
      
      const team = teams.find((team) => team.team_code === inputCode);
      console.log(team);
      if (team) {
        navigate(`/team/${inputCode}`); 
      } else {
        window.alert('Invalid team code');
      }
    } catch (error) {
      console.error('Error fetching teams:', error);
      window.alert('Failed to fetch teams');
    }
  };

  return (
    <div className="submitTeam-container">
      <label htmlFor="teamCodeInput">Join With:</label>
      <input
        type="text"
        id="teamCodeInput"
        value={inputCode}
        onChange={handleInputChange}
        placeholder=" Enter Team Code"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SubmitTeam;
