import 'dayjs/locale/zh-tw';

import React from 'react';

import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { TimeSlot } from '@/utils';

const styles = (theme: Theme) => ({
  bookedColor: {
    color: theme.palette.grey[400],
  },
  availableColor: {
    color: theme.palette.primary.main,
  },
});

const useStyles = makeStyles(styles);

type Props = {
  timeSlot: TimeSlot;
};

const TimeSlotRow: React.FC<Props> = ({ timeSlot }) => {
  const classes = useStyles();

  return (
    <Typography variant="body2" gutterBottom className={timeSlot.booked ? classes.bookedColor : classes.availableColor}>
      {timeSlot.date.format('HH:mm')}
    </Typography>
  );
};

export default TimeSlotRow;
