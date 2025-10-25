import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '20s', target: 5 },    // idle
    { duration: '20s', target: 80 },   // spike up
    { duration: '40s', target: 80 },   // stay
    { duration: '20s', target: 0 },    // down
  ],
};

export default () => {
  const res = http.get('http://localhost:3000/getUsers');
  check(res, { 'status is 200': r => r.status === 200 });
  sleep(1);
};
