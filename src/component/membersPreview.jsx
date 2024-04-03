import React, { useState, useEffect } from "react";
import Member from "./Member";
import { useLocation } from "react-router-dom";
// use this format if fetching
//import { apiPath } from '../api';
// fetch(apiPath('/teams'))

function MembersPreview() {
  const [members, setMembers] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(apiPath('/members'))
      .then((response) => response.json())
      .then((data) => setMembers(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="members-preview-list">
      {members.map((member) => (
        <Member key={member.id} member={member} />
      ))}
    </div>
  );
}

export default MembersPreview;
