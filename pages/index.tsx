import ShopCard from '@/components/cards/shopCard/ShopCard';
import Hero from '@/components/layout/hero/Hero';
import Navbar from '@/components/layout/navbar/Navbar';
import Head from 'next/head';

import styles from '@/styles/Home.module.scss';

export default function Home() {
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
    </>
  );
}
