import React from "react";
import { Link } from "react-router-dom";
import CreateTimeoff from "./CreateTimeoff";
// use this format if fetching
//import { apiPath } from '../api';
// fetch(apiPath('/teams'))

const Member = ({ member }) => {
  
  return (
    <Link to={`/members/${member.id}`} className="member-link">
      <div className="member-card">
        <h3>
          {member.first_name}{" "}
          <span style={{ color: member.color }}>{member.color}</span>
        </h3>
        <p>You have booked {member.assigned_dayoff}</p>
      </div>
    </Link>
  );
};

export default Member;
