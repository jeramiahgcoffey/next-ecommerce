import Image from 'next/image';
import styles from './Navbar.module.scss';

interface INavbarProps {}

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Image
          src="/assets/shared/tablet/icon-hamburger.svg"
          width="16"
          height="15"
          alt="Hamburger icon"
        />
        <Image
          src="/assets/shared/desktop/logo.svg"
          width="143"
          height="25"
          alt="Logo"
        />
        <Image
          src="/assets/shared/desktop/icon-cart.svg"
          width="23"
          height="20"
          alt="Shopping cart icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
