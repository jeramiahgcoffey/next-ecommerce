import headerImage from '@/public/assets/home/mobile/image-header.jpg';
import styles from './Hero.module.scss';

import Button from '@/components/inputs/button/Button';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={headerImage}
          alt="Featured headphones"
          fill
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <div className={`overline ${styles.overline}`}>new product</div>
          <h2>xx99 mark ii headphones</h2>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button handleClick={(e) => console.log(e)}>see product</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
