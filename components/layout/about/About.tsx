import useViewport from '@/hooks/useViewport';
import Image from 'next/image';
import styles from './About.module.scss';

const About = () => {
  const { width } = useViewport();

  const source = () => {
    if (width >= 1000) {
      return '/assets/shared/desktop/image-best-gear.jpg';
    } else if (width >= 600) {
      return '/assets/shared/tablet/image-best-gear.jpg';
    } else {
      return '/assets/shared/mobile/image-best-gear.jpg';
    }
  };

  return (
    <>
      <div className={styles.about}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={source()}
            fill
            alt="profile of man with headphones"
          />
        </div>
        <div className={styles.textContainer}>
          <h4 className={styles.heading}>
            Bringing you the <span className="textPrimary">best</span> audio
            gear
          </h4>
          <p className={styles.paragraph}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
