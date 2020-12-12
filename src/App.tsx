import React from 'react';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';

function App() {
  const { t } = useTranslation();
  return (
    <div>
      <Typography variant="h3">{t('TITLE')}</Typography>
    </div>
  );
}

export default App;
