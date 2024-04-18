import React, { useEffect, useState } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';

import 'react-big-calendar/lib/css/react-big-calendar.css';

function MyCalendar() {
  const localizer = dayjsLocalizer(dayjs);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Obtener datos de los eventos
        const responseEvents = await fetch('http://localhost:4051/api/timeoff');
        const eventsData = await responseEvents.json();

        // Obtener datos de los miembros
        const responseMembers = await fetch('http://localhost:4051/api/members');
        const membersData = await responseMembers.json();

        // Mapear los eventos y completar el título con información de los miembros
        const formattedEvents = eventsData.map(event => {
          const member = membersData.find(member => member.id === event.member_id);
          const title = member ? `${member.first_name} ${member.last_name}: ${event.description}` : event.description;
          return {
            start: new Date(event.start_date),
            end: new Date(event.end_date),
            title: title
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
        views={['month']}
        eventPropGetter={(event, start, end, isSelected) => {
          const style = {
            backgroundColor: event.color, 
            borderRadius: '0px', 
            border: 'none', 
            fontSize: '10px', 
            height: '20px', 
            overflow: 'hidden', 
            padding: '2px', 
            margin: '2px' 
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
