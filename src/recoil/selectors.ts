import { selector } from 'recoil';

import { calendarDateState } from './atom';

export const getCalendarDateInterval = selector({
  key: 'getCalendarDateInterval',
  get: ({ get }) => {
    const calendarDate = get(calendarDateState);

    return [calendarDate.startOf('week'), calendarDate.endOf('week')];
  },
});

export const getAllCalendarDate = selector({
  key: 'getCalendarDateInterval',
  get: ({ get }) => {
    const calendarDate = get(calendarDateState);
    const startOfWeek = calendarDate.startOf('week');

    return [
      startOfWeek,
      startOfWeek.add(1, 'day'),
      startOfWeek.add(2, 'day'),
      startOfWeek.add(3, 'day'),
      startOfWeek.add(4, 'day'),
      startOfWeek.add(5, 'day'),
      startOfWeek.add(6, 'day'),
    ];
  },
});
