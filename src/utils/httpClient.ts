import axios from './customAxios';

export default function httpClient({
  url,
  method,
  headers,
}: {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
}) {
  return axios({
    url,
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
}
