const names = [
  'Тіньовий QA',
  'Скритий Девелопер',
  'Анонімний Дизайнер',
  'Невідомий Тестувальник',
  'Секретний Кодер',
  'Неіменований Графічний дизайнер',
  'Прихований Розробник',
  'Невідомий UX/UI дизайнер',
  'Анонімний Архітектор',
  'Загадковий Аналітик',
];

export const randomName = () => {
  const randomIndx = Math.round(Math.random() * (names.length - 1));

  return names[randomIndx];
};
