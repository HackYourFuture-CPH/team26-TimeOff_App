import React, { useState, useEffect } from "react";
import Member from "./Member";
import { useLocation } from "react-router-dom";

function MembersPreview() {
  const [members, setMembers] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("/api/members")
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
