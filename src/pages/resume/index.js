import Head from 'next/head';
import { Footer, HeaderSection, Navbar, OnlineResume } from '../../components';

const Resume = () => {
  return (
    <>
      <Head>
        <title>Dwinovic | Online Resume </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <HeaderSection heading="Online Resume" btnTitle="Download as a PDF" />
        <div className="container mx-auto pt-8 flex relative">
          <div className="w-72">
            <Navbar />
          </div>
          <div className="flex w-full justify-center mb-8">
            <OnlineResume />
          </div>
        </div>
        <Footer />
      </body>
    </>
  );
};

export default Resume;
