import React from "react";
import { Link } from "react-router-dom";

const Member = ({ member }) => {
  
  return (
    <Link to={`/members/${member.id}`} className="member-link">
      <div className="member-card">
        <h3>{member.first_name}</h3>
        <p>{member.color}</p>
        <p>You have booked {member.assigned_dayoff}</p>
      </div>
    </Link>
  );
};

export default Member;