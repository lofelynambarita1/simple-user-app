import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 },   // ramp up
    { duration: '1m', target: 50 },    // hold
    { duration: '30s', target: 0 },    // ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // contoh threshold
  },
};

export default () => {
  const res = http.get('http://localhost:3000/getUsers');
  check(res, { 'status is 200': r => r.status === 200 });
  sleep(1);
};
