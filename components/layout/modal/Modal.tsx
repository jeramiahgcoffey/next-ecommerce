import styles from './Modal.module.scss';

const Modal = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.overlay}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
