import { ReactElement } from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
  variant: 'primary' | 'secondary' | 'flat';
  children: ReactElement | string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  variant = 'primary',
  handleClick,
  children,
}: IButtonProps) => {
  return (
    <button
      className={`subtitle ${styles.button} ${styles[variant]}`}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </button>
  );
};

export default Button;
