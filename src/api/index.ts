import dayjs from 'dayjs';
import { Server } from 'miragejs';

import mockAppointments from './mockAppointments.json';
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
          return mockAppointments;
        }

        return {
          available: [],
          booked: [],
        };
      },
    );
  },
});
