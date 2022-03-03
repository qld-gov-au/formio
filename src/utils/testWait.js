export const testWait = (props = { delay: 100 }) => {
  const { delay = 100 } = props;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, delay);
  });
};
