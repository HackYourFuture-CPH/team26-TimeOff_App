import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MembersList from "../component/MembersList"; 
import { apiPath } from '../api';
import MyCalendar from "../component/Calendar";


const Team = () => {
  const [team, setTeam] = useState(null);
  const [members, setMembers] = useState([]);
  const { code } = useParams();

  useEffect(() => {
    
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
   <>
    <div>
      <h2>{team.team_name}</h2>
      <MembersList teamId={team.id} /> 
    </div>
    
    <MyCalendar/>
    </>

  );
};

export default Team;
