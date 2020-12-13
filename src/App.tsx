import React from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Calendar from '@/components/Calendar/Calendar';
import DateSelect from '@/components/DateSelect/DateSelect';
import LanguageSelect from '@/components/LanguageSelect/LanguageSelect';
import Loading from '@/components/Loading/Loading';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box p={{ xs: 0.5, md: 3 }}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" gutterBottom>
          {t('TITLE')}
        </Typography>
        <LanguageSelect />
      </Box>

      <DateSelect />
      <React.Suspense fallback={<Loading />}>
        <Calendar />
      </React.Suspense>
    </Box>
  );
};

export default App;
