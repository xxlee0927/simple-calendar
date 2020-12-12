import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    lng: 'zh-TW',
    fallbackLng: 'zh-TW',
    load: 'currentOnly',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}.json`,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
