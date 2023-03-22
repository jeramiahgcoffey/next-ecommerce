import ShopCard from '@/components/cards/shopCard/ShopCard';
import Button from '@/components/inputs/button/Button';
import HomeLayout from '@/components/layout/HomeLayout';
import useViewport from '@/hooks/useViewport';
import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import { ReactElement } from 'react';

export default function Home() {
  const { width } = useViewport();

  const source = (
    fileName: 'speaker-zx9.png' | 'speaker-zx7.jpg' | 'earphones-yx1.jpg'
  ) => {
    if (width > 1000) {
      return `/assets/home/desktop/image-${fileName}`;
    } else if (width > 600) {
      return `/assets/home/tablet/image-${fileName}`;
    } else {
      return `/assets/home/mobile/image-${fileName}`;
    }
  };

  return (
    <>
      <div className={styles.home}>
        <div className={styles.shopCardContainer}>
          <ShopCard
            image="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            name="Headphones"
          />
          <ShopCard
            image="/assets/shared/desktop/image-category-thumbnail-speakers.png"
            name="Speakers"
          />
          <ShopCard
            image="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            name="Earphones"
          />
        </div>
        <div className={styles.zx9Card}>
          <div className={styles.container}>
            <Image
              className={styles.circles}
              src="/assets/home/desktop/pattern-circles.svg"
              width="560"
              height="560"
              alt="background circles"
            />
            <Image
              className={styles.speaker}
              src={source('speaker-zx9.png')}
              width={width < 1000 ? 172.25 : 400}
              height={width < 1000 ? 209 : 486}
              alt="zx9 speaker"
            />
            <div className={styles.textContainer}>
              <h3>ZX9 Speaker</h3>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <div className={styles.button}>
                <Button
                  handleClick={() => console.log('click')}
                  variant="inverted"
                >
                  See product
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.zx7Card}>
          <div className={styles.container}>
            <Image
              className={styles.image}
              src={source('speaker-zx7.jpg')}
              fill
              alt="zx7 speaker"
            />
            <div className={styles.textContainer}>
              <h3>zx7 speaker</h3>
              <div className={styles.button}>
                <Button
                  handleClick={() => console.log('click')}
                  variant="secondary"
                >
                  See Product
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.yx1Container}>
          <div className={styles.container}>
            <Image
              className={styles.image}
              src={source('earphones-yx1.jpg')}
              alt="yx1 earphones"
              fill
            />
          </div>
          <div className={`${styles.container} ${styles.textContainer}`}>
            <h3>yx1 earphones</h3>
            <Button
              variant="secondary"
              handleClick={() => {
                console.log('click');
              }}
            >
              See Product
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
