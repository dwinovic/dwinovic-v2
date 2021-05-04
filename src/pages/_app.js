import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextNprogress
        color="#ffd138"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
