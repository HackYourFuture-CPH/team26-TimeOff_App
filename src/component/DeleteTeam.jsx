import React from 'react'
import {apiPath} from "../api"
const DeleteTeam = ({ teamsDatabase, setTeamsDatabase }) => {
    const handleDeleteTeam = async (teamId) => {
        try {
    
          const response = await fetch(apiPath('/teams'), {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            // Pass the team ID as a body to the api call
            body: JSON.stringify({ id: teamId })
          });
    
          if (!response.ok) {
            throw new Error('Failed to create team');
          }
    
          setTeamsDatabase(prevTeams => [...prevTeams]);
          window.alert(`Team ${team.team_name} has been deleted`);
        } catch (error) {
          console.error('Error creating team:', error);
          window.alert('Failed to create team');
        }
      };
  return (
    //Discuss with team members if I should create a list of teams with the Name and delete button next to it which will trigger the handleDeleteTeam function
    <div>
        {teamsDatabase.map((team) => (
            <div>
                <p>{team.team_name}</p>
                <button onClick={handleDeleteTeam(team.id)}>Delete</button>                
            </div>
        ))}
    </div>
  )
}

export default DeleteTeam