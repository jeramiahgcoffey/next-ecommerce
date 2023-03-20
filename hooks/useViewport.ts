import { viewportContext } from '@/contexts/viewportContext';
import { useContext } from 'react';

const useViewport = () => {
  const { width } = useContext(viewportContext);
  return { width };
};

export default useViewport;
