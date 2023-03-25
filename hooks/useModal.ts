import { ModalContext } from '@/contexts/ModalContext';
import { useContext } from 'react';

const useModal = () => {
  const { isOpen, setContent, toggleModal } = useContext(ModalContext);

  return { isOpen, setContent, toggleModal };
};
