import { useState, useEffect } from "react";
import SubmitTeam from "../component/SubmitTeam";
import { apiPath } from "../api";
import Navbar from "./Navbar";
import "../styles/home.css";
import Testimonials from "../component/Testimonials";

const Home = () => {
  const [teamsDatabase, setTeamsDatabase] = useState([]);

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
    <div className="home-conteiner">
      <Navbar />
      <section className="main-section">
        <div className="headers-conteiiner">
          <h2 className="main-header">Time Off</h2>
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
    </div>
  );
};

export default Home;
