import dayjs, { Dayjs } from 'dayjs';

import { Appointments, Interval } from '@/api';

export interface TimeSlot {
  date: Dayjs;
  booked: boolean;
}

interface WeekTimeSlots {
  [index: number]: Array<TimeSlot>;
}

const pushToTimeSlots = (weekTimeSlots: WeekTimeSlots, intervals: Array<Interval>, booked: boolean): void => {
  intervals.forEach(appt => {
    const start = dayjs(appt.start);
    const end = dayjs(appt.end);
    const dayOfWeek = start.day();

    let cur = start;
    while (cur.isBefore(end)) {
      const timeslot: TimeSlot = {
        date: cur,
        booked,
      };
      weekTimeSlots[dayOfWeek].push(timeslot);
      cur = cur.add(30, 'minute');
    }
  });
};

export const getWeekTimeSlots = (appointments: Appointments): WeekTimeSlots => {
  const weekTimeSlots = [[], [], [], [], [], [], []];
  pushToTimeSlots(weekTimeSlots, appointments.booked, true);
  pushToTimeSlots(weekTimeSlots, appointments.available, false);
  weekTimeSlots.forEach(timeSlots => {
    timeSlots.sort((a: TimeSlot, b: TimeSlot) => a.date.diff(b.date));
  });

  return weekTimeSlots;
};
