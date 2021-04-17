import Head from 'next/head';
import { Navbar } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dwinovic | Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <Navbar />
      </body>
    </>
  );
}
