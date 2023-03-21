import ShopCard from '@/components/cards/shopCard/ShopCard';
import Button from '@/components/inputs/button/Button';
import Hero from '@/components/layout/hero/Hero';
import Navbar from '@/components/layout/navbar/Navbar';
import useViewport from '@/hooks/useViewport';
import styles from '@/styles/Home.module.scss';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const { width } = useViewport();

  const zx9 = () => {
    if (width > 600) {
      return '/assets/home/tablet/image-speaker-zx9.png';
    } else {
      return '/assets/home/mobile/image-speaker-zx9.png';
    }
  };

  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="Audio Gear Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
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
              src={zx9()}
              width={172.25}
              height={209}
              alt="zx9 speaker"
            />

            <h3>ZX9 Speaker</h3>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button handleClick={() => console.log('click')} variant="inverted">
              See product
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
