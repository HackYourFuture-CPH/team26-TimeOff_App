import React, { useEffect, useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { apiPath } from "../api";

function MyCalendar() {
  const localizer = dayjsLocalizer(dayjs);
  const [events, setEvents] = useState([]);

  const fetchMembers = async (teamId) => {
    try {
      const responseMembers = await fetch(apiPath(`/members`));
      const membersData = await responseMembers.json();

      const teamMembers = membersData.filter(
        (member) => member.team_id === teamId
      );

      return teamMembers;
    } catch (error) {
      throw new Error("Error fetching members:", error);
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const teamCode = window.location.pathname.split("/").pop();
        const responseTeams = await fetch(apiPath(`/teams`));
        const teamsData = await responseTeams.json();
        const team = teamsData.find((team) => team.team_code === teamCode);

        if (!team) return;

        const teamMembers = await fetchMembers(team.id);

        const responseEvents = await fetch(apiPath(`/timeoff`));
        const eventsData = await responseEvents.json();
        const teamMemberIds = teamMembers.map((member) => member.id);
        const teamEvents = eventsData.filter((event) =>
          teamMemberIds.includes(event.member_id)
        );

        const formattedEvents = teamEvents.map((event) => {
          const member = teamMembers.find(
            (member) => member.id === event.member_id
          );
          const title = member
            ? `${member.first_name} ${member.last_name}: ${event.description}`
            : event.description;
          const backgroundColor = member ? member.color : "#000000";
          return {
            start: new Date(event.start_date),
            end: new Date(event.end_date),
            title: title,
            backgroundColor: backgroundColor,
          };
        });

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        views={["month"]}
        eventPropGetter={(event, start, end, isSelected) => {
          const style = {
            borderRadius: "0px",
            border: "none",
            fontSize: "10px",
            height: "20px",
            overflow: "hidden",
            padding: "2px",
            margin: "2px",
            backgroundColor: event.backgroundColor,
          };
          return { style };
        }}
        style={{
          height: 500,
          width: 500,
        }}
      />
    </div>
  );
}

export default MyCalendar;
