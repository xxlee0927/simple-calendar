import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import dayjs from 'dayjs';
import { useRecoilState } from 'recoil';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { languageState } from '@/recoil/atom';

const LanguageSelect: React.FC = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useRecoilState(languageState);

  useEffect(() => {
    i18n.on('initialized', () => setLanguage(i18n.language as string));

    return () => {
      i18n.off('initalized');
    };
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
    dayjs().locale(language);
  }, [language]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLanguage(event.target.value as string);
  };

  return (
    <Select value={language} onChange={handleChange}>
      <MenuItem value={'zh-TW'}>中文</MenuItem>
      <MenuItem value={'en-US'}>English</MenuItem>
    </Select>
  );
};

export default LanguageSelect;
