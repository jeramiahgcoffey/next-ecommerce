import styles from './Footer.module.scss';

import useViewport from '@/hooks/useViewport';
import logo from '@/public/assets/shared/desktop/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const { width } = useViewport();

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.decoration}></div>
        <div className={styles.logo}>
          <Image src={logo} alt="Logo" />
        </div>
        <nav className={styles.nav}>
          <Link href={'/'}>
            <p className="subtitle">Home</p>
          </Link>
          <Link href={'/'}>
            <p className="subtitle">Headphones</p>
          </Link>
          <Link href={'/'}>
            <p className="subtitle">Speakers</p>
          </Link>
          <Link href={'/'}>
            <p className="subtitle">Earphones</p>
          </Link>
        </nav>
        <div className={styles.text}>
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </div>
        {width > 600 ? (
          <div className={styles.container}>
            <div className={styles.copyright}>
              Copyright © 2021. All Rights Reserved
            </div>
            <div className={styles.icons}>
              <Link href={'/'}>
                <Image
                  src="/assets/shared/desktop/icon-facebook.svg"
                  width={24}
                  height={24}
                  alt="Facebook icon"
                />
              </Link>
              <Link href={'/'}>
                <Image
                  src="/assets/shared/desktop/icon-twitter.svg"
                  width={24}
                  height={20}
                  alt="Facebook icon"
                />
              </Link>
              <Link href={'/'}>
                <Image
                  src="/assets/shared/desktop/icon-instagram.svg"
                  width={24}
                  height={24}
                  alt="Facebook icon"
                />
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.copyright}>
              Copyright © 2021. All Rights Reserved
            </div>
            <div className={styles.icons}>
              <Link href={'/'}>
                <Image
                  src="/assets/shared/desktop/icon-facebook.svg"
                  width={24}
                  height={24}
                  alt="Facebook icon"
                />
              </Link>
              <Link href={'/'}>
                <Image
                  src="/assets/shared/desktop/icon-twitter.svg"
                  width={24}
                  height={20}
                  alt="Facebook icon"
                />
              </Link>
              <Link href={'/'}>
                <Image
                  src="/assets/shared/desktop/icon-instagram.svg"
                  width={24}
                  height={24}
                  alt="Facebook icon"
                />
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Footer;
