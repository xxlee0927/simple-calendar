import React from 'react';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';

import DateSelect from '@/components/DateSelect/DateSelect';

const App: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h3">{t('TITLE')}</Typography>
      <DateSelect />
    </div>
  );
};

export default App;
