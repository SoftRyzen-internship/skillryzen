export const convertToUTC = () => {
  const localDate = new Date();
  const timezoneOffset = localDate.getTimezoneOffset();
  return new Date(localDate.getTime() - timezoneOffset * 60000);
};
