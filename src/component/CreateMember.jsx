import React, { useState } from "react";
import '../index.css';


function CreateMember({ memberId, teamsDatabase }) {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [email, setEmail] = useState("");
  const [color, setColor] = useState("#000000"); 
  const [selectedTeam, setSelectedTeam] = useState(""); 
  const [isFormVisible, setIsFormVisible] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const memberData = {
      first_name: name.firstName,
      last_name: name.lastName,
      email: email,
      color: color,
      team_id: selectedTeam,
      id: memberId,
    };

    try {
      const response = await fetch("/api/members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(memberData),
      });

      if (response.ok) {
        alert("Member created successfully!");
        setName({ firstName: "", lastName: "" });
        setEmail("");
        setColor("#000000");
        setSelectedTeam("");
        setIsFormVisible(false); 

      } else {
        const data = await response.json();
        alert(data.error || "Failed to create member. Please try again.");
      }
    } catch (error) {
      console.error("Error creating member:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div>
      {!isFormVisible && (
        <button className="create-button" onClick={() => setIsFormVisible(true)}>Create Member</button>
      )}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="member-form">
          <div>
            <label>First Name:</label>
            <input
              type="text"
              value={name.firstName}
              onChange={(e) => setName({ ...name, firstName: e.target.value })}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              value={name.lastName}
              onChange={(e) => setName({ ...name, lastName: e.target.value })}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Color:</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div>
            <label>Team:</label>
            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
            >
              <option value="">Select Team</option>
              {teamsDatabase.map((team) => (
                <option key={team.id} value={team.id}>{team.team_name}</option>
              ))}
            </select>
          </div>
          <button type="submit">Create Member</button>
        </form>
      )}
    </div>
  );
}

export default CreateMember;
