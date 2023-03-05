import { useEffect, useState } from 'react';

type WindowSize = {
  width: number;
};
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMd = windowSize.width === 768;
  const isSm = windowSize.width === 480;

  return { windowSize, isMd, isSm };
};

export default useWindowSize;
