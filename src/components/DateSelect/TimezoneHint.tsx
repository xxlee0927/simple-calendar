import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';

const TimezoneHint: React.FC = () => {
  const { t } = useTranslation();
  const timezoneOffset = useMemo(() => {
    const offsetMinutes = new Date().getTimezoneOffset();
    const sign = offsetMinutes > 0 ? '-' : '+';
    return `${sign}${Math.abs(offsetMinutes / 60)}:00`;
  }, []);

  return <Typography variant="caption">{t('DateSelect.HINT', { timezoneOffset })}</Typography>;
};

export default TimezoneHint;
