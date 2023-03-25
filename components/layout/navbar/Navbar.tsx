import Image from 'next/image';
import styles from './Navbar.module.scss';

import ShopCardContainer from '@/components/containers/shopCardContainer/ShopCardContainer';
import useModal from '@/hooks/useModal';
import useViewport from '@/hooks/useViewport';
import hamburger from '@/public//assets/shared/tablet/icon-hamburger.svg';
import cart from '@/public/assets/shared/desktop/icon-cart.svg';
import logo from '@/public/assets/shared/desktop/logo.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Navbar = () => {
  const { width } = useViewport();
  const { toggleModal: toggleCart } = useModal();
  const router = useRouter();

  const [modal, setModal] = useState(false);

  const toggleNav = () => {
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
          <Image
            onClick={toggleCart}
            className={styles.icon}
            src={cart}
            alt="Shopping cart icon"
          />
        </>
      );
    } else if (width >= 600) {
      return (
        <>
          <div className={styles.leftContainer}>
            <Image
              className={styles.icon}
              onClick={() => toggleNav()}
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
          <Image
            onClick={toggleCart}
            className={styles.icon}
            src={cart}
            alt="Shopping cart icon"
          />
        </>
      );
    } else {
      return (
        <>
          <Image
            onClick={() => toggleNav()}
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
          <Image
            onClick={toggleCart}
            className={styles.icon}
            src={cart}
            alt="Shopping cart icon"
          />
        </>
      );
    }
  };

  return (
    <nav className={styles.nav}>
      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleNav} className={styles.overlay}></div>
          <div onClick={toggleNav} className={styles.content}>
            <ShopCardContainer />
          </div>
        </div>
      )}
      <div className={styles.container}>{navItems()}</div>
    </nav>
  );
};

export default Navbar;
