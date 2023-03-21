export const convertTime = (time: number) => {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export const convertTestTime = (time: number, min: string, sec: string) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  if (!minutes) {
    return `${seconds} ${sec}`;
  }
  return !sec ? `${minutes} ${min}` : `${minutes} ${min} ${seconds} ${sec}`;
};

export const convertTestDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(2);
  return `${day}/${month}/${year}`;
};
