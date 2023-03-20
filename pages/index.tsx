import Navbar from '@/components/layout/navbar/Navbar';
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

      <Navbar />
    </>
  );
}
