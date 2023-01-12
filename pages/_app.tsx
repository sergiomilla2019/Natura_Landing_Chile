import { useEffect } from 'react';
import { useRouter } from 'next/router';
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url:URL) => {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
        page_path: url, 
      });
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);
  
  return (
    <Layout title="Home">
      <Component {...pageProps} />
    </Layout>
  );
}
