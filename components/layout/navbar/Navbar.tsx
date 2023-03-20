import Image from 'next/image';
import styles from './Navbar.module.scss';

import useViewport from '@/hooks/useViewport';
import hamburger from '@/public//assets/shared/tablet/icon-hamburger.svg';
import cart from '@/public/assets/shared/desktop/icon-cart.svg';
import logo from '@/public/assets/shared/desktop/logo.svg';

interface INavbarProps {}

const Navbar = () => {
  const { width } = useViewport();

  const navItems =
    width > 600 ? (
      <>
        <div className={styles.leftContainer}>
          <Image src={hamburger} id="hamburger" alt="Hamburger icon" />
          <Image src={logo} alt="Logo" />
        </div>
        <Image src={cart} alt="Shopping cart icon" />
      </>
    ) : (
      <>
        <Image src={hamburger} alt="Hamburger icon" />
        <Image src={logo} alt="Logo" />
        <Image src={cart} alt="Shopping cart icon" />
      </>
    );

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>{navItems}</div>
    </nav>
  );
};

export default Navbar;
