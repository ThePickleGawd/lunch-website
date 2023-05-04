export const useSleep = () => {
  const sleep = () => new Promise((r) => setTimeout(r, 500));
  return { sleep };
};
