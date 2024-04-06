import React, { useState, useEffect } from 'react';
import SubmitTeam from '../component/SubmitTeam';
import { apiPath } from '../api';

import '../index.css';

const Home = () => {
  const [teamsDatabase, setTeamsDatabase] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const url = apiPath('/teams'); 
      const response = await fetch(url);
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
      <SubmitTeam teamsDatabase={teamsDatabase} />
    </div>
  );
};

export default Home;
