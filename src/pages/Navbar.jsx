import { useState, useEffect } from 'react';
import CreateTeam from '../component/CreateTeam';
import { apiPath } from '../api';
import '../styles/navbar.css'; 

function Navbar({theme, setTheme}) {
  const [teamsDatabase, setTeamsDatabase] = useState([]);

  const toggle_mode = ()=>{
    theme === 'light' ?  setTheme('dark') : setTheme('light');
  } 

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
    <div className="navbar">

      <img src="/logo.svg" alt="Logo" className="logo" />

      <div className="navbar-center">
        <span className="navbar-text">About</span>
        <span className="navbar-text">|</span>
        <span className="navbar-text">Contact</span>
        <span className="navbar-text">|</span>
        <span className="navbar-text">Pricing</span>
      </div>

      <div className="conteiner-create-team">
        <CreateTeam setTeamsDatabase={setTeamsDatabase} />
      </div>

      <img onClick={()=>{toggle_mode()}} src={theme === 'light' ? "/day.png" : "/night.png"} alt="" className='toggle-icon'/>
    </div>
  );
}

export default Navbar;
