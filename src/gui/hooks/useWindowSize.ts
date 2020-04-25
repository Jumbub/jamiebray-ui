import { useState, useEffect } from 'react';

const getWindowSize = () => {
  if (process.browser) {
    return [window.innerWidth, window.innerHeight];
  } else {
    return [1920, 1080];
  }
};

export const useWindowSize = () => {
  const [size, setSize] = useState(getWindowSize());

  const onResize = () => setSize(getWindowSize());

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  return size;
};
