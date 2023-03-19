import styles from '@/styles/Home.module.scss';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="Audio Gear Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.heading}>Hello World</h1>
        <div>
          Home Headphones Speakers Earphones New product XX99 Mark II Headphones
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast. See product Headphones Shop
          Speakers Shop Earphones Shop ZX9 speaker Upgrade to premium speakers
          that are phenomenally built to deliver truly remarkable sound. See
          product ZX7 speaker See product YX1 earphones See product Bringing you
          the best audio gear Located at the heart of New York City, Audiophile
          is the premier store for high end headphones, earphones, speakers, and
          audio accessories. We have a large showroom and luxury demonstration
          rooms available for you to browse and experience a wide range of our
          products. Stop by our store to meet some of the fantastic people who
          make Audiophile the best place to buy your portable audio equipment.
          Home Headphones Speakers Earphones Audiophile is an all in one stop to
          fulfill your audio needs. We&apos;re a small team of music lovers and
          sound specialists who are devoted to helping you get the most out of
          personal audio. Come and visit our demo facility - we&apos;re open 7
          days a week. Copyright 2021. All Rights Reserved
        </div>
      </main>
    </>
  );
}
