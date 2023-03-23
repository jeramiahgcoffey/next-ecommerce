import { ReactElement } from 'react';
import About from './about/About';
import Hero from './hero/Hero';

import styles from './HomeLayout.module.scss';

const HomeLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <div className={styles.children}>{children}</div>
      <About />
    </>
  );
};

export default HomeLayout;
