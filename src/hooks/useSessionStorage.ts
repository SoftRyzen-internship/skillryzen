import { useEffect, useState } from 'react';

export const useSessionStorage = (
  key: string,
  defaultValue: {
    currentTab: number;
    size: 'large' | 'small';
  }
) => {
  const [state, setState] = useState(() => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
