import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SubmitTeam from "../component/SubmitTeam"; 
import MembersList from "../component/MembersList"; 
import Member from "../component/Member";

const Team = () => {
  const [team, setTeam] = useState(null);
  const [members, setMembers] = useState([]);
  const { code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("UseEffect Triggered")
    const fetchTeam = async () => {
      try {
        console.log("fetching teams...")
        const response = await fetch(`/api/teams/${code}`);
        console.log("Response", response)
        if (!response.ok) {
          throw new Error("Failed to fetch team");
        }
        const teamData = await response.json();
        console.log("Team Data", teamData)
        setTeam(teamData);
      } catch (error) {
        console.error("Error fetching team:", error);
      }
    };

    const fetchMembers = async () => {
      try {
        const response = await fetch(`/api/teams/${code}/members`);
        if (!response.ok) {
          throw new Error("Failed to fetch members");
        }
        const membersData = await response.json();
        setMembers(membersData);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchTeam();
    fetchMembers();
  }, [code]);

  if (!team) {
    return <div>Loading team data...</div>;
  }

  return (
    <div>
      <h2>{team.team_name}</h2>
      <p>Team Code: {team.team_code}</p>
      <h3>Members:</h3>
      <div>
        {members.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </div>
      <MembersList /> 
      <SubmitTeam navigate={navigate} />
    </div>
  );
};

export default Team;
