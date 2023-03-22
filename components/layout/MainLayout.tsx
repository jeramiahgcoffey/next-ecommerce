import { ReactElement, ReactNode } from 'react';
import About from './about/About';
import styles from './MainLayout.module.scss';

const MainLayout = ({ children }: { children: ReactElement | ReactNode }) => {
  return (
    <>
      <div className={styles.children}>{children}</div>
      <About />
    </>
  );
};

export default MainLayout;
