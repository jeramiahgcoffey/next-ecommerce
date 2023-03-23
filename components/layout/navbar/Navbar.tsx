import Image from 'next/image';
import styles from './Navbar.module.scss';

import ShopCardContainer from '@/components/containers/shopCardContainer/ShopCardContainer';
import useViewport from '@/hooks/useViewport';
import hamburger from '@/public//assets/shared/tablet/icon-hamburger.svg';
import cart from '@/public/assets/shared/desktop/icon-cart.svg';
import logo from '@/public/assets/shared/desktop/logo.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface INavbarProps {}

const Navbar = () => {
  const { width } = useViewport();
  const router = useRouter();

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    if (!modal) {
      document.body.style.overflowY = 'hidden';
      setModal(true);
    } else {
      document.body.style.overflowY = 'unset';
      setModal(false);
    }
  };

  const navItems = () => {
    if (width >= 1000) {
      return (
        <>
          <Image
            onClick={() => router.push('/')}
            className={styles.logo}
            src={logo}
            alt="Logo"
          />
          <div className={styles.linkContainer}>
            <Link href={'/'}>
              <p className="subtitle">Home</p>
            </Link>
            <Link href={'/category/headphones'}>
              <p className="subtitle">Headphones</p>
            </Link>
            <Link href={'/category/speakers'}>
              <p className="subtitle">Speakers</p>
            </Link>
            <Link href={'/category/earphones'}>
              <p className="subtitle">Earphones</p>
            </Link>
          </div>
          <Image className={styles.icon} src={cart} alt="Shopping cart icon" />
        </>
      );
    } else if (width >= 600) {
      return (
        <>
          <div className={styles.leftContainer}>
            <Image
              className={styles.icon}
              onClick={() => toggleModal()}
              src={hamburger}
              id="hamburger"
              alt="Hamburger icon"
            />

            <Image
              onClick={() => router.push('/')}
              className={styles.logo}
              src={logo}
              alt="Logo"
            />
          </div>
          <Image className={styles.icon} src={cart} alt="Shopping cart icon" />
        </>
      );
    } else {
      return (
        <>
          <Image
            onClick={() => toggleModal()}
            className={styles.icon}
            src={hamburger}
            alt="Hamburger icon"
          />
          <Image
            onClick={() => router.push('/')}
            className={styles.logo}
            src={logo}
            alt="Logo"
          />
          <Image className={styles.icon} src={cart} alt="Shopping cart icon" />
        </>
      );
    }
  };

  return (
    <nav className={styles.nav}>
      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div onClick={toggleModal} className={styles.content}>
            <ShopCardContainer />
          </div>
        </div>
      )}
      <div className={styles.container}>{navItems()}</div>
    </nav>
  );
};

export default Navbar;
