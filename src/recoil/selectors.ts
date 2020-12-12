import { selector } from 'recoil';

import { calendarDateState } from './atom';

export const getCalendarDateInterval = selector({
  key: 'getCalendarDateInterval',
  get: ({ get }) => {
    const calendarDate = get(calendarDateState);

    return [calendarDate.startOf('week'), calendarDate.endOf('week')];
  },
});
