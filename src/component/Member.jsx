import React from "react";
import { Link } from "react-router-dom";

const Member = ({ member }) => {
  
  return (
    <Link to={`/members/${member.id}`} className="member-link">
      <div className="member-card">
        <h3>
          {member.first_name}{" "}
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="6" fill={member.color} />
          </svg>
        </h3>
      </div>
    </Link>
  );
};

export default Member;
