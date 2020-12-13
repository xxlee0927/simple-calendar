import React, { useState } from 'react';

import dayjs from 'dayjs';
import { useRecoilValue } from 'recoil';

import Box from '@material-ui/core/Box';

import DayColumn from '@/components/DayColumn/DayColumn';
import { selectAllCalendarDate } from '@/recoil/selectors';

const Calendar: React.FC = () => {
  const allCalendarDate = useRecoilValue(selectAllCalendarDate);
  const [now] = useState(dayjs());

  return (
    <Box display="flex">
      {allCalendarDate.map(date => (
        <Box key={date.valueOf()} flex={1}>
          <DayColumn date={date} isPast={now.isAfter(date, 'day')} />
        </Box>
      ))}
    </Box>
  );
};

export default Calendar;
