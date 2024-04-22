import { useEffect, useState, useContext } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { MyContext } from "../component/Context";
import { apiPath } from "../api";

function MyCalendar() {
  const localizer = dayjsLocalizer(dayjs);
  const { teams, members } = useContext(MyContext);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const teamCode = window.location.pathname.split("/").pop();
    const team = teams.find((team) => team.team_code === teamCode);

    if (!team) return;

    const teamMembers = members.filter((member) => member.team_id === team.id);

    const fetchEvents = async () => {
      try {
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
          return {
            start: new Date(event.start_date),
            end: new Date(event.end_date),
            title: member ? `${member.first_name} ${member.last_name}` : "",
            description: event.description,
            backgroundColor: member ? member.color : "#000000",
          };
        });

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [teams, members]);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        onSelectEvent={handleEventClick}
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
      {selectedEvent && (
        <div>
          <h3>{selectedEvent.title}</h3>
          <p>{selectedEvent.description}</p>
        </div>
      )}
    </div>
  );
}

export default MyCalendar;
