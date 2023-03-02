export const createArray = (number: number) => {
  return [...Array(number)].fill(1).map((item, index) => index + 1);
}