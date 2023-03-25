import { ViewportContext } from '@/contexts/viewportContext';
import { useContext } from 'react';

const useViewport = () => {
  const { width } = useContext(ViewportContext);
  return { width };
};

export default useViewport;
