import dayjs from 'dayjs';
import { Server } from 'miragejs';

// mock api
new Server({
  routes() {
    this.namespace = 'api';

    this.get('/appointments/:timestamp', (schema, request) => {
      const timestamp = parseInt(request.params.timestamp);
      const date = dayjs.unix(timestamp);

      return {
        available: [
          {
            start: '2020-12-18T10:30:00Z',
            end: '2020-12-18T11:00:00Z',
          },
          {
            start: '2020-12-18T13:00:00Z',
            end: '2020-12-18T14:00:00Z',
          },
          {
            start: '2020-12-19T05:30:00Z',
            end: '2020-12-19T07:00:00Z',
          },
        ],
        booked: [
          {
            start: '2020-12-18T11:00:00Z',
            end: '2020-12-18T13:00:00Z',
          },
          {
            start: '2020-12-18T14:00:00Z',
            end: '2020-12-18T15:00:00Z',
          },
          {
            start: '2020-12-19T07:00:00Z',
            end: '2020-12-19T08:00:00Z',
          },
          {
            start: '2020-12-19T11:30:00Z',
            end: '2020-12-19T13:00:00Z',
          },
        ],
      };
    });
  },
});
