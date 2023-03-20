import ViewportProvider from '@/contexts/viewportContext';
import '@/styles/globals.scss';
import { Manrope } from '@next/font/google';
import type { AppProps } from 'next/app';

const manrope = Manrope({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={manrope.className}>
      <ViewportProvider>
        <Component {...pageProps} />
      </ViewportProvider>
    </div>
  );
}
