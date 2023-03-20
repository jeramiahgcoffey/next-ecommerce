import { ReactElement } from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
  variant?: 'primary' | 'secondary' | 'flat';
  children: ReactElement | string;
  handler(): void;
}

const Button = ({ variant = 'primary', handler, children }: IButtonProps) => {
  return (
    <button
      className={`subtitle ${styles.button} ${styles[variant]}`}
      onClick={() => handler()}
    >
      {children}
    </button>
  );
};

export default Button;
