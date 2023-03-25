import { ViewportContext } from '@/contexts/ViewportContext';
import { useContext } from 'react';

const useViewport = () => {
  const { width } = useContext(ViewportContext);
  return { width };
};

export default useViewport;
