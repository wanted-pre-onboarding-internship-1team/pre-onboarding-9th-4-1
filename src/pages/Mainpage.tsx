import { MockApi } from '../api/MockApi';
import React, { useEffect } from 'react';

export default function Mainpage() {
  const api = new MockApi();
  useEffect(() => {
    const data = api.getData().then(res => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <div>asdasd1</div>
    </div>
  );
}
