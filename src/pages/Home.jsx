import React, { useState, useEffect } from 'react';
import SubmitTeam from '../component/SubmitTeam';
import { apiPath } from '../api';
import './Home.css';
import CreateMember from '../component/CreateMember';
import CreateTeam from '../component/CreateTeam';
import imgTop from '../img/home/imgTop.png'
// import DeleteTeam from '../component/DeleteTeam';

const Home = ({theme, setTheme}) => {
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
    <div className="mainSection">
      <div className="top-Header">
        <h2>Time Off</h2>
        <p>
          TimeOff_App is a web application designed to simplify the process of managing vacations and time off for teams within a company. 
          It provides a user-friendly interface for creating teams, managing team members, and tracking their time off.
        </p>
        <SubmitTeam teamsDatabase={teamsDatabase} />
        <div className='create-container'>
          <CreateMember teamsDatabase={teamsDatabase} />
          <CreateTeam setTeamsDatabase={setTeamsDatabase} />
        </div>
        {/* <DeleteTeam teamsDatabase={teamsDatabase} setTeamsDatabase={setTeamsDatabase} /> */}
      </div>
      <div className='imgContainer'>
        <img src={imgTop} alt=""></img>
      </div>
    </div>
  );
};

export default Home;
