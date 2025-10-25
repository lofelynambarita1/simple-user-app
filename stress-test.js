import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m', target: 50 },
    { duration: '1m', target: 100 },
    { duration: '1m', target: 0 },
  ],
};

export default () => {
  const res = http.get('http://localhost:3000/getUsers');
  check(res, { 'status is 200': r => r.status === 200 });
  sleep(1);
};
