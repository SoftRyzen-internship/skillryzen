import { convertToUTC } from '../utils/convertLocalTimeToUTC';

export const parseDate = (date: Date) => {
  const utcDate = convertToUTC();
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const diffTime = date.getTime() - utcDate.getTime();

  const days = Math.floor(diffTime / day);
  const hours = Math.floor((diffTime % day) / hour);
  const minutes = Math.floor(((diffTime % day) % hour) / minute);
  const weeks = Math.floor(days / 7);

  if (weeks) {
    return `Available in ${weeks} weeks`;
  }
  if (days) {
    return `Available in ${days} days`;
  }
  if (hours) {
    return `Available in ${hours} hours`;
  }
  if (minutes) {
    return `Available in ${minutes} minutes`;
  }
};
