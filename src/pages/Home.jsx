import { useState, useEffect } from "react";
import SubmitTeam from "../component/SubmitTeam";
import { apiPath } from "../api";
import Navbar from "./Navbar";
import "../styles/home.css";
import Testimonials from "../component/Testimonials";
import PriceCard from "../component/PriceCard";
import About from "../component/About";

const Home = () => {
  const [teamsDatabase, setTeamsDatabase] = useState([]);
  const current_theme = localStorage.getItem('current_theme');  // This will store the default theme of web browser
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light'); // Created constant for dark mode

  useEffect (()=>{
    localStorage.setItem('current_theme', theme);
  },[theme]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const url = apiPath("/teams");
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch teams");
      }
      const teams = await response.json();
      setTeamsDatabase(teams);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  return (
    <div className={`home-conteiner ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <section className="main-section">
        <div className="headers-conteiner">
          <h2 className="main-header">TimeOff</h2>
          <h3 className="main-subheader">
            TimeOff is a web application designed to simplify the process of
            managing vacations and time off for teams within a company. It
            provides a user-friendly interface for creating teams, managing team
            members, and tracking their time off.
          </h3>

          <SubmitTeam teamsDatabase={teamsDatabase} />
        </div>
        <div className="main-image-conteiner">
          <img src="/logo.svg" alt="main-image" className="img-main" />
        </div>
      </section>

      <section className="testimonials-conteiner">
      <Testimonials />
      </section>
      <section><PriceCard /></section>
      <section><About /></section>
    </div>
  );
};

export default Home;
