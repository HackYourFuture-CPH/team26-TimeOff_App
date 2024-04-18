import React from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';

import 'react-big-calendar/lib/css/react-big-calendar.css';


function MyCalendar() {
  const localizer = dayjsLocalizer(dayjs);

  return (
    <div>
      <Calendar
        localizer={localizer}
        style={{
          height: 500,
          width: 500
        }}
      />
    </div>
  );
}

export default MyCalendar;
