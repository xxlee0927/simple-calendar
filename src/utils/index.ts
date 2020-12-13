import dayjs, { Dayjs } from 'dayjs';

import { Appointments, Interval } from '@/api';

export interface TimeSlot {
  date: Dayjs;
  booked: boolean;
}

interface WeekTimeSlots {
  [index: number]: Array<TimeSlot>;
}

export const divideIntervalIntoDate = (interval: Interval, minutes: number): Array<Dayjs> => {
  const start = dayjs(interval.start);
  const end = dayjs(interval.end);

  const result = [];
  let cur = start;
  while (cur.isBefore(end)) {
    result.push(cur);
    cur = cur.add(minutes, 'minute');
  }

  return result;
};

export const pushToTimeSlots = (weekTimeSlots: WeekTimeSlots, intervals: Array<Interval>, booked: boolean): void => {
  intervals.forEach(interval => {
    const dayOfWeek = dayjs(interval.start).day();

    const dates = divideIntervalIntoDate(interval, 30);
    const timeSlots = dates.map((date): TimeSlot => ({ date, booked }));
    weekTimeSlots[dayOfWeek].push(...timeSlots);
  });
};

export const sortTimeSlots = (timeSlots: Array<TimeSlot>): void => {
  timeSlots.sort((a: TimeSlot, b: TimeSlot) => a.date.diff(b.date));
};

export const getWeekTimeSlots = (appointments: Appointments): WeekTimeSlots => {
  const weekTimeSlots = [[], [], [], [], [], [], []];
  pushToTimeSlots(weekTimeSlots, appointments.booked, true);
  pushToTimeSlots(weekTimeSlots, appointments.available, false);

  weekTimeSlots.forEach(timeSlots => {
    sortTimeSlots(timeSlots);
  });

  return weekTimeSlots;
};
