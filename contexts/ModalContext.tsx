import { createContext, useState } from 'react';

interface IModalContext {
  isOpen: boolean;
  content: React.ReactElement;
  toggleModal: () => void;
  setContent: (content: React.ReactElement) => void;
}

export const ModalContext = createContext<IModalContext>({
  isOpen: false,
  content: <></>,
  toggleModal: () => {},
  setContent: () => {},
});

const ModalProvider = ({ children }: { children: React.ReactElement }) => {
  const [state, setState] = useState({ isOpen: false, content: <></> });

  const toggleModal = () => {
    setState((prev) => ({
      ...state,
      isOpen: !prev.isOpen,
    }));
  };

  const setContent = (content: React.ReactElement) => {
    setState((prev) => ({
      ...state,
      content,
    }));
  };

  return (
    <ModalContext.Provider value={{ ...state, toggleModal, setContent }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
