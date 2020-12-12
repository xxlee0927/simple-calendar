import React from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';

const DateSelect: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <Box display="flex">
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <Typography variant="h3">{t('TITLE')}</Typography>
    </Box>
  );
};

export default DateSelect;
