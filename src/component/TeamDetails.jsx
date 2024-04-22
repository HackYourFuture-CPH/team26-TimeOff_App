import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../component/Context';

const TeamMembers = () => {
  const { code } = useParams(); 
  const { members, teams } = useContext(MyContext); 
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const teamId = teams.find(team => team.team_code === code)?.id;

    const filteredMembers = members.filter(member => member.team_id === teamId);
    setTeamMembers(filteredMembers);

  }, [code, members, teams]);

  return (
    <div>
      <h2>Team Members</h2>
      <ul>
        {teamMembers.map(member => (
          <li key={member.id}>{member.first_name} {member.last_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMembers;
