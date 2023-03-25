import { throttle } from 'lodash';
import {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';

interface IViewportContext {
  width: number;
}

export const ViewportContext = createContext<IViewportContext>({
  width: 0,
});

const ViewportProvider = ({
  children,
}: {
  children: ReactElement | ReactNode;
}) => {
  const [width, setWidth] = useState(0);

  const handleResize = (width: number) => {
    setWidth(width);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(
        'resize',
        throttle(() => handleResize(window.innerWidth), 300)
      );
      handleResize(window.innerWidth);
      return () =>
        window.removeEventListener('resize', () =>
          handleResize(window.innerWidth)
        );
    }
  }, []);

  return (
    <ViewportContext.Provider value={{ width }}>
      {children}
    </ViewportContext.Provider>
  );
};

export default ViewportProvider;
