import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Member from "../pages/Member";
import { apiPath } from '../api';
import '../styles/memberList.css';

const MembersList = ({teamId}) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState(null);
  const { code } = useParams();

  useEffect(() => {
    fetch(apiPath('/members'))
      .then((response) => response.json())
      .then((data) => {
        setMembers(data.filter(member => member.team_id === teamId));
      })
      .catch((error) => {
        console.error("Error fetching members:", error);
      })
      .finally(() => {
        setLoading(false);
      });

      const fetchTeam = async () => {
        try {
          const response = await fetch(apiPath(`/teams/${code}`));
          if (!response.ok) {
            throw new Error("Failed to fetch team");
          }
          const teamData = await response.json();
          setTeam(teamData);
  
        } catch (error) {
          console.error("Error fetching team:", error);
        }
      };

    fetchTeam();

  }, [code,teamId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="containerList">
      <div className="titleContainer">
        <section>
          <h1>Welcome Back, <span>{team.team_name} </span></h1> 
          <h3>Here is a list of your team members!</h3>
        </section>
        <img src="/logo.svg" alt="Logo" className="logo" />
      </div>
      <div className="members-grid">
        {members.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default MembersList;
