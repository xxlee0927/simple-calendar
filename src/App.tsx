import React from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Calendar from '@/components/Calendar/Calendar';
import DateSelect from '@/components/DateSelect/DateSelect';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box p={3}>
      <Typography variant="h6" gutterBottom>
        {t('TITLE')}
      </Typography>
      <DateSelect />

      <React.Suspense fallback={<div>Loading...</div>}>
        <Calendar />
      </React.Suspense>
    </Box>
  );
};

export default App;
