export const createArray = (number: number) =>
  [...Array(number)].fill(1).map((item, index) => index + 1);
