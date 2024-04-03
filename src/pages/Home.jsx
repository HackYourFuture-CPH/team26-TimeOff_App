import React, { useState, useEffect } from 'react';
import SubmitTeam from '../component/SubmitTeam';
import { apiPath } from '../api';

import '../index.css';

const Home = () => {
  const [teamsDatabase, setTeamsDatabase] = useState([]);

  useEffect(() => {
    fetchTeams();
    console.log("useEffect in fetchteams Triggered")
  }, []);

  const fetchTeams = async () => {
    try {
      const url = apiPath('/teams'); 
      console.log("API URL:", url); 
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch teams');
      }
      const teams = await response.json();
      setTeamsDatabase(teams);
      console.log("setTeamsDatabase in fetchteams Triggered")
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
