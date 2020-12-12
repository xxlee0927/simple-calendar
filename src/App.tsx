import React from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import DateSelect from '@/components/DateSelect/DateSelect';

const App: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <Box p={3}>
      <Typography variant="h6">{t('TITLE')}</Typography>
      <DateSelect />
    </Box>
  );
};

export default App;
