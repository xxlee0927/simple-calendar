import dayjs from 'dayjs';
import { atom } from 'recoil';

export const calendarDateState = atom({
  key: 'dateInterval',
  default: dayjs(new Date()),
});

export const languageState = atom({
  key: 'language',
  default: 'zh-TW',
});
