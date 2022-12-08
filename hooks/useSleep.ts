export const useSleep = () => {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  return { sleep };
};
