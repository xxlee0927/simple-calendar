import { selector, selectorFamily } from 'recoil';

import { calendarDateState } from './atom';

const getStartOfWeek = selector({
  key: 'getStartOfWeek',
  get: ({ get }) => {
    const calendarDate = get(calendarDateState);
    return calendarDate.startOf('week');
  },
});

export const getCalendarDateInterval = selector({
  key: 'getCalendarDateInterval',
  get: ({ get }) => {
    const calendarDate = get(calendarDateState);

    return [calendarDate.startOf('week'), calendarDate.endOf('week')];
  },
});

export const getAllCalendarDate = selector({
  key: 'getAllCalendarDate',
  get: ({ get }) => {
    const startOfWeek = get(getStartOfWeek);

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

export const getAppointments = selector({
  key: 'getAppointments',
  get: async ({ get }) => {
    const startOfWeek = get(getStartOfWeek);
    const response = await fetch(`api/appointments/${startOfWeek.unix()}`);

    return response.json();
  },
});

// export const getAppointmentsByDay = selectorFamily({
//   key: 'getAppointmentsByDay',
//   get: date => ({ get }) => {
//     const appointments = get(getAppointments);
//     const result = {

//     }
//   },
// });
