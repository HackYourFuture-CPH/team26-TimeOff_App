import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MembersList from "../component/MembersList"; 
import Member from "../component/Member";
import { apiPath } from '../api';


const Team = () => {
  const [team, setTeam] = useState(null);
  const [members, setMembers] = useState([]);
  const { code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch(apiPath(`/teams/${code}`));
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
        const response = await fetch(apiPath(`/teams/${code}/members`));
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
      {/* <div>
        {members.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </div> */}
      <MembersList /> 
    </div>
  );
};

export default Team;
