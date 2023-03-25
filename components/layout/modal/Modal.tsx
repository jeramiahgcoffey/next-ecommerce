import useModal from '@/hooks/useModal';
import styles from './Modal.module.scss';

const Modal = ({ children }: { children: React.ReactElement }) => {
  const { toggleModal } = useModal();

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={toggleModal}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Modal;
