import React, { useState } from 'react';

import dayjs from 'dayjs';
import { useRecoilValue } from 'recoil';

import Box from '@material-ui/core/Box';

import DayColumn from '@/components/DayColumn/DayColumn';
import { selectAllCalendarDate, selectAppointments, selectTimeSlots } from '@/recoil/selectors';

const Calendar: React.FC = () => {
  const allCalendarDate = useRecoilValue(selectAllCalendarDate);
  const appointments = useRecoilValue(selectTimeSlots);
  const [now] = useState(dayjs(new Date()));

  console.log(appointments);

  return (
    <Box display="flex">
      {allCalendarDate.map(date => (
        <Box key={date.valueOf()} flex={1}>
          <DayColumn date={date} isPast={now.isAfter(allCalendarDate[0], 'day')} />
        </Box>
      ))}
    </Box>
  );
};

export default Calendar;
