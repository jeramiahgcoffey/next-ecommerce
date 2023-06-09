import desktopHeaderImage from '@/public/assets/home/desktop/image-hero.jpg';
import mobileHeaderImage from '@/public/assets/home/mobile/image-header.jpg';
import tabletHeaderImage from '@/public/assets/home/tablet/image-header.jpg';
import styles from './Hero.module.scss';

import Button from '@/components/inputs/button/Button';
import useViewport from '@/hooks/useViewport';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Hero = () => {
  const { width } = useViewport();
  const router = useRouter();

  const headerImage = () => {
    if (width >= 1000) {
      return desktopHeaderImage;
    } else if (width >= 600) {
      return tabletHeaderImage;
    } else {
      return mobileHeaderImage;
    }
  };

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={headerImage()}
            alt="Featured headphones"
            fill
          />
        </div>
        <div className={styles.overlay}>
          <div className={styles.container}>
            <div className={styles.textContainer}>
              <div className={`overline ${styles.overline}`}>new product</div>
              {width < 600 ? (
                <h2>xx99 mark ii headphones</h2>
              ) : (
                <h1>xx99 mark ii headphones</h1>
              )}
              <p>
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <Button
                handleClick={() =>
                  router.push('/product/xx99-mark-two-headphones')
                }
              >
                see product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
