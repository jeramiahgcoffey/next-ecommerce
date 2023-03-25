import Layout from '@/components/layout/Layout';
import CartProvider from '@/contexts/CartContext';
import ModalProvider from '@/contexts/ModalContext';
import ViewportProvider from '@/contexts/viewportContext';
import '@/styles/globals.scss';
import { Manrope } from '@next/font/google';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

const manrope = Manrope({ subsets: ['latin'] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <div className={`app ${manrope.className}`}>
      <ViewportProvider>
        <ModalProvider>
          <CartProvider>
            <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
          </CartProvider>
        </ModalProvider>
      </ViewportProvider>
    </div>
  );
}
