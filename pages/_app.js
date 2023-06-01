
import Head from 'next/head';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>Home - Agency Finance</title>
        <meta name="description" content="This is the description of my page." />
        <meta name="keywords" content="next.js, meta tags, example" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
