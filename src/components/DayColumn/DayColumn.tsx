import 'dayjs/locale/zh-tw';

import React from 'react';

import clsx from 'clsx';
import { Dayjs } from 'dayjs';
import { useRecoilState, useRecoilValue } from 'recoil';

import { Theme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import TimeSlotRow from '@/components/TimeSlotRow/TimeSlotRow';
import { languageState } from '@/recoil/atom';
import { selectTimeSlotsByDay } from '@/recoil/selectors';

const styles = (theme: Theme) => ({
  bar: {
    width: '100%',
    height: 4,
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,

    '&.pastColor': {
      backgroundColor: theme.palette.grey[400],
    },
  },
});

const useStyles = makeStyles(styles);

type Props = {
  date: Dayjs;
  isPast: boolean;
};

const DayColumn: React.FC<Props> = ({ date, isPast }) => {
  const classes = useStyles();
  const timeSlots = useRecoilValue(selectTimeSlotsByDay(date.day()));
  const [language] = useRecoilState(languageState);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={{ xs: 0.5, md: 2 }}>
      <div className={clsx(classes.bar, { pastColor: isPast })} />
      <Typography>{date.locale(language.toLowerCase()).format('dd')}</Typography>
      <Typography>{date.format('D')}</Typography>

      {!isPast && (
        <Box mt={2}>
          {timeSlots.map(timeSlot => (
            <TimeSlotRow key={timeSlot.date.unix()} timeSlot={timeSlot} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default DayColumn;
