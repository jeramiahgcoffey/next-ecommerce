import Image from 'next/image';
import styles from './Navbar.module.scss';

import hamburger from '@/public//assets/shared/tablet/icon-hamburger.svg';
import cart from '@/public/assets/shared/desktop/icon-cart.svg';
import logo from '@/public/assets/shared/desktop/logo.svg';

interface INavbarProps {}

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Image src={hamburger} alt="Hamburger icon" />
        <Image src={logo} alt="Logo" />
        <Image src={cart} alt="Shopping cart icon" />
      </div>
    </nav>
  );
};

export default Navbar;
