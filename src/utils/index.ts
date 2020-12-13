import dayjs, { Dayjs } from 'dayjs';

import { Appointments, Interval } from '@/api';

interface TimeSlot {
  date: Dayjs;
  booked: boolean;
}

interface TimeSlots {
  [index: number]: Array<TimeSlot>;
}

const pushToTimeSlots = (timeSlots: TimeSlots, intervals: Array<Interval>, booked: boolean): void => {
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
      timeSlots[dayOfWeek].push(timeslot);
      cur = cur.add(30, 'minute');
    }
  });
};

export const getTimeSlots = (appointments: Appointments): TimeSlots => {
  const timeSlots = [[], [], [], [], [], [], []];
  pushToTimeSlots(timeSlots, appointments.booked, true);
  pushToTimeSlots(timeSlots, appointments.available, false);
  // appointments.booked.forEach(appt => {
  //   const start = dayjs(appt.start);
  //   const end = dayjs(appt.end);
  //   const dayOfWeek = start.day();
  //   let cur = start;

  //   while (cur.isBefore(end)) {
  //     const timeslot: TimeSlot = {
  //       date: cur,
  //       booked: true,
  //     };
  //     timeSlots[dayOfWeek].push(timeslot);
  //     cur = cur.add(30, 'minute');
  //   }
  // });
  return timeSlots;
};
