import Image from 'next/image';
import styles from './Navbar.module.scss';

import useViewport from '@/hooks/useViewport';
import hamburger from '@/public//assets/shared/tablet/icon-hamburger.svg';
import cart from '@/public/assets/shared/desktop/icon-cart.svg';
import logo from '@/public/assets/shared/desktop/logo.svg';
import Link from 'next/link';

interface INavbarProps {}

const Navbar = () => {
  const { width } = useViewport();

  const navItems = () => {
    if (width >= 1000) {
      return (
        <>
          <Image src={logo} alt="Logo" />
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
              src={hamburger}
              id="hamburger"
              alt="Hamburger icon"
            />
            <Image src={logo} alt="Logo" />
          </div>
          <Image className={styles.icon} src={cart} alt="Shopping cart icon" />
        </>
      );
    } else {
      return (
        <>
          <Image className={styles.icon} src={hamburger} alt="Hamburger icon" />
          <Image src={logo} alt="Logo" />
          <Image className={styles.icon} src={cart} alt="Shopping cart icon" />
        </>
      );
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>{navItems()}</div>
    </nav>
  );
};

export default Navbar;
