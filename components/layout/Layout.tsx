import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import Footer from './footer/Footer';
import styles from './Layout.module.scss';
import Navbar from './navbar/Navbar';

const Layout = ({ children }: { children: ReactElement | ReactNode }) => {
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="Audio Gear Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Navbar />
      <div className={styles.children}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
