import 'dayjs/locale/zh-tw';

import React from 'react';

import clsx from 'clsx';
import { Dayjs } from 'dayjs';

import { Theme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) => ({
  bar: {
    width: '100%',
    height: 4,
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,

    '&.pastColor': {
      backgroundColor: theme.palette.grey[500],
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

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
      <div className={clsx(classes.bar, { pastColor: isPast })} />
      <Typography>{date.locale('zh-tw').format('dd')}</Typography>
      <Typography>{date.format('D')}</Typography>
    </Box>
  );
};

export default DayColumn;
