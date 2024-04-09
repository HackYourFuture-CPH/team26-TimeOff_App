// import { useNavigate } from "react-router-dom";
import React from 'react'
import {apiPath} from "../api"
const DeleteMember = ({ memberId }) => {
    // const navigate = useNavigate();

    const handleDeleteMember = async () => {
        try {
    
          const response = await fetch(apiPath(`/members/${memberId}`), {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
          });
    
          if (!response.ok) {
            throw new Error('Failed to delete member');
        } else {
            // navigate(`/team/${randomCode}`);
        }
    } catch (error) {
        console.error(error); 
    }
};
  return (
    <div>

        <button className="delete-button" onClick={() => handleDeleteMember(memberId)}>Delete</button>                
         
        
    </div>
)
};
export default DeleteMember;