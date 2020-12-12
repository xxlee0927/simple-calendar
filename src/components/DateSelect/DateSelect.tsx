import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import dayjs from 'dayjs';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const DateSelect: React.FC<{}> = () => {
  const { t } = useTranslation();
  const date = new Date();

  const dateString = useMemo(() => dayjs(date).format('YYYY/M/D'), [date]);

  const handleClickPrev = () => {
    return null;
  };
  const handleClickNext = () => {
    return null;
  };

  return (
    <Grid container alignItems="center">
      <Grid item xs={12} md={6}>
        <Box display="flex" alignItems="center">
          <Box mr={1}>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button onClick={handleClickPrev}>
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
          <Typography variant="caption">{t('DateSelect.HINT')}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DateSelect;
