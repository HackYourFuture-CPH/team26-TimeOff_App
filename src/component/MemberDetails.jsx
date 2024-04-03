import React, { useState, useEffect } from "react";
import CreateTimeoff from "./CreateTimeoff";
import { apiPath } from "../api";
// use this format if fetching
//import { apiPath } from '../api';
// fetch(apiPath('/teams'))

function MemberDetails({ match }) {
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const memberid = match.params.id;

    const fetchMemberDetails = async () => {
      try {
        const memberResponse = await fetch(apiPath(`/members/${memberid}`));
        const memberData = await memberResponse.json();
        setMember(memberData);
        setLoading(false);
      } catch (error) {
        setError("Error fetching member details");
        setLoading(false); 
      }
    };

    fetchMemberDetails();
  }, [match.params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="member-details">
      <h2>{member.first_name}</h2>
      <p>{member.color}</p>
      <p>Booked days off: {member.assigned_dayoff}</p>

      <div className="form-container">
        {member.assigned_dayoff >= member.allowed_dayoff ? (
          <p>You have used all your allowed days off. 😞</p>
        ) : (
          <CreateTimeoff memberId={member.id} maxDaysoff={member.allowed_dayoff} />
        )}
      </div>
    </div>
  );
}

export default MemberDetails;
