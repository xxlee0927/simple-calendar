import React, { useMemo } from 'react';

import dayjs from 'dayjs';
import { useRecoilState, useRecoilValue } from 'recoil';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { calendarDateState } from '@/recoil/atom';
import { selectCalendarDateInterval } from '@/recoil/selectors';
import TimezoneHint from './TimezoneHint';

const DateSelect: React.FC = () => {
  const [calendarDate, setCalendarDate] = useRecoilState(calendarDateState);
  const [startDate, endDate] = useRecoilValue(selectCalendarDateInterval);

  const dateString = useMemo(() => `${startDate.format('YYYY/M/D')} - ${endDate.format('M/D')}`, [startDate, endDate]);

  const handleClickPrev = () => {
    setCalendarDate(dayjs(calendarDate).subtract(1, 'week'));
  };
  const handleClickNext = () => {
    setCalendarDate(dayjs(calendarDate).add(1, 'week'));
  };

  return (
    <Grid container alignItems="center">
      <Grid item xs={12} md={6}>
        <Box display="flex" alignItems="center">
          <Box mr={2}>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button onClick={handleClickPrev} disabled={!startDate.isAfter(dayjs())}>
                <ChevronLeftIcon />
              </Button>
              <Button onClick={handleClickNext}>
                <ChevronRightIcon />
              </Button>
            </ButtonGroup>
          </Box>
          <Typography variant="body1">{dateString}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box display="flex" justifyContent={{ xs: 'flex-start', md: 'flex-end' }}>
          <TimezoneHint />
        </Box>
      </Grid>
    </Grid>
  );
};

export default DateSelect;
