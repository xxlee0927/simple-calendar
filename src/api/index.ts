import dayjs from 'dayjs';
import { Server } from 'miragejs';
export interface Interval {
  start: string;
  end: string;
}
export interface Appointments {
  available: Array<Interval>;
  booked: Array<Interval>;
}

// mock api
new Server({
  routes() {
    this.namespace = 'api';

    this.get(
      '/appointments/:timestamp',
      (schema, request): Appointments => {
        const timestamp = parseInt(request.params.timestamp);
        const date = dayjs.unix(timestamp);

        if (date.isSame(dayjs('2020-12-13'), 'day')) {
          return {
            available: [
              {
                start: '2020-12-17T05:30:00Z',
                end: '2020-12-17T07:00:00Z',
              },
              {
                start: '2020-12-18T10:30:00Z',
                end: '2020-12-18T11:00:00Z',
              },
              {
                start: '2020-12-18T13:00:00Z',
                end: '2020-12-18T14:00:00Z',
              },
            ],
            booked: [
              {
                start: '2020-12-17T07:00:00Z',
                end: '2020-12-17T08:00:00Z',
              },
              {
                start: '2020-12-17T11:30:00Z',
                end: '2020-12-17T13:00:00Z',
              },
              {
                start: '2020-12-18T11:00:00Z',
                end: '2020-12-18T13:00:00Z',
              },
              {
                start: '2020-12-18T14:00:00Z',
                end: '2020-12-18T15:00:00Z',
              },
            ],
          };
        }

        return {
          available: [],
          booked: [],
        };
      },
    );
  },
});
