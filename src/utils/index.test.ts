import dayjs from 'dayjs';

import { Interval } from '@/api';
import { divideIntervalIntoDate, sortTimeSlots, TimeSlot } from './index';

describe('test divideIntervalIntoDate', () => {
  test('interval should be divided into 30 minutes', () => {
    const interval: Interval = {
      start: '2020-12-17T05:30:00Z',
      end: '2020-12-17T07:00:00Z',
    };

    expect(divideIntervalIntoDate(interval, 30)).toEqual([
      dayjs('2020-12-17T05:30:00Z'),
      dayjs('2020-12-17T06:00:00Z'),
      dayjs('2020-12-17T06:30:00Z'),
    ]);
  });
});

describe('test sortTimeSlots', () => {
  test('timeSlots should be ascending sorted by date', () => {
    const timeSlots: Array<TimeSlot> = [
      {
        date: dayjs('2020-12-17T05:30:00Z'),
        booked: false,
      },
      {
        date: dayjs('2020-12-17T06:30:00Z'),
        booked: false,
      },
      {
        date: dayjs('2020-12-17T06:00:00Z'),
        booked: true,
      },
    ];
    sortTimeSlots(timeSlots);

    expect(timeSlots).toEqual([
      {
        date: dayjs('2020-12-17T05:30:00Z'),
        booked: false,
      },
      {
        date: dayjs('2020-12-17T06:00:00Z'),
        booked: true,
      },
      {
        date: dayjs('2020-12-17T06:30:00Z'),
        booked: false,
      },
    ]);
  });
});
