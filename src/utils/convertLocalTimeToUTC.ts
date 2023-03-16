export const convertToUTC = (date: Date) => {
  // const localDate = new Date();
  const timezoneOffset = date.getTimezoneOffset();
  return new Date(date.getTime() + timezoneOffset * 60000);
};
