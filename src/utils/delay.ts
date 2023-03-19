export const delay5Second = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      console.log('강제 delay');
      resolve('리졸브 끝!');
    }, 1 * 1000);
  });
};
