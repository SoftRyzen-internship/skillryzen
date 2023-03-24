import { useState, useEffect } from 'react';

export const useCurrentWidth = () => {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  const getCurrentWidth = () => {
    setCurrentWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', getCurrentWidth);

    return () => {
      window.removeEventListener('resize', getCurrentWidth);
    };
  }, [currentWidth]);

  return currentWidth;
};
