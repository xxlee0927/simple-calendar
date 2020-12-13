import { selector, selectorFamily } from 'recoil';

import { getWeekTimeSlots } from '@/utils/';
import { calendarDateState } from './atom';

const selectStartOfWeek = selector({
  key: 'selectStartOfWeek',
  get: ({ get }) => {
    const calendarDate = get(calendarDateState);
    return calendarDate.startOf('week');
  },
});

export const selectCalendarDateInterval = selector({
  key: 'selectCalendarDateInterval',
  get: ({ get }) => {
    const calendarDate = get(calendarDateState);

    return [calendarDate.startOf('week'), calendarDate.endOf('week')];
  },
});

export const selectAllCalendarDate = selector({
  key: 'selectAllCalendarDate',
  get: ({ get }) => {
    const startOfWeek = get(selectStartOfWeek);

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

export const selectAppointments = selector({
  key: 'selectAppointments',
  get: async ({ get }) => {
    const startOfWeek = get(selectStartOfWeek);
    const response = await fetch(`api/appointments/${startOfWeek.unix()}`);

    return response.json();
  },
});

export const selectWeekTimeSlots = selector({
  key: 'selectWeekTimeSlots',
  get: ({ get }) => {
    const appointments = get(selectAppointments);
    return getWeekTimeSlots(appointments);
  },
});

export const selectTimeSlotsByDay = selectorFamily({
  key: 'selectTimeSlotsByDay',
  get: (day: number) => ({ get }) => {
    const weekTimeSlots = get(selectWeekTimeSlots);
    return weekTimeSlots[day];
  },
});
