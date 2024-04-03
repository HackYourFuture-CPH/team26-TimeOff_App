import React, { useState } from "react";
// use this format if fetching
//import { apiPath } from '../api';
// fetch(apiPath('/teams'))

function CreateTimeoff({ memberId, maxDaysoff }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const start = new Date(startDate);
    const end = new Date(endDate);
    const numberOfDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    if (numberOfDays > maxDaysoff) {
      alert("You cannot book more days off than your maximum allowed.");
      return;
    }

    try {
      const response = await fetch(`/api/members/${memberId}/timeoff`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          start_date: startDate, 
          end_date: endDate, 
          description: description
        }),
      });

      if (response.ok) {
        alert("Time off booked successfully!");
        setIsFormVisible(false); 
      } else {
        const data = await response.json();
        alert(data.error || "Failed to book time off. Please try again.");
      }
    } catch (error) {
      console.error("Error booking time off:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <button onClick={() => setIsFormVisible(true)}>Book Time Off</button>
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label>End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default CreateTimeoff;
