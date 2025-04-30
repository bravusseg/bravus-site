// src/pages/_app.tsx
import '../styles/globals.css';
+ import Head from 'next/head';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
+     <Head>
+       <script src="https://cdn.tailwindcss.com"></script>
+     </Head>
      <Component {...pageProps} />
    </>
  );
}
