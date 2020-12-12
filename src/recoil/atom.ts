import dayjs from 'dayjs';
import { atom } from 'recoil';

export const calendarDateState = atom({
  key: 'dateInterval',
  default: dayjs(new Date()),
});
