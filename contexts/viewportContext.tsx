import { throttle } from 'lodash';
import { createContext, ReactElement, useEffect, useState } from 'react';

interface IViewportContext {
  width: number;
}

export const viewportContext = createContext<IViewportContext>({
  width: typeof window !== 'undefined' ? window?.innerWidth : 0,
});

const ViewportProvider = ({ children }: { children: ReactElement }) => {
  const currentWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

  const [width, setWidth] = useState(currentWidth);

  const handleResize = (width: number) => {
    setWidth(width);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(
        'resize',
        throttle(() => handleResize(window.innerWidth), 300)
      );
      return () =>
        window.removeEventListener('resize', () =>
          handleResize(window.innerWidth)
        );
    }
  }, []);

  return (
    <viewportContext.Provider value={{ width }}>
      {children}
    </viewportContext.Provider>
  );
};

export default ViewportProvider;
