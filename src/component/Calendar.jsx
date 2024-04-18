import { useEffect, useState } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';

import 'react-big-calendar/lib/css/react-big-calendar.css';

function MyCalendar() {
  const localizer = dayjsLocalizer(dayjs);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const responseEvents = await fetch('http://localhost:4051/api/timeoff');
        const eventsData = await responseEvents.json();


        const responseMembers = await fetch('http://localhost:4051/api/members');
        const membersData = await responseMembers.json();


        const formattedEvents = eventsData.map(event => {
          const member = membersData.find(member => member.id === event.member_id);
          const title = member ? `${member.first_name} ${member.last_name}: ${event.description}` : event.description;
          const backgroundColor = member ? member.color : '#000000'; 
          return {
            start: new Date(event.start_date),
            end: new Date(event.end_date),
            title: title,
            backgroundColor: backgroundColor 
          };
        });

        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        eventPropGetter={(event, start, end, isSelected) => {
          const style = {
            borderRadius: '0px',
            border: 'none',
            fontSize: '10px',
            height: '20px',
            overflow: 'hidden',
            padding: '2px',
            margin: '2px',
            backgroundColor: event.backgroundColor 
          };
          return { style };
        }}
        style={{
          height: 500,
          width: 500
        }}
      />
    </div>
  );
}

export default MyCalendar;
