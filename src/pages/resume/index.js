import Head from 'next/head';
import {
  Footer,
  HeaderSection,
  Navbar,
  OnlineResume,
  NavbarTop,
} from '../../components';

const Resume = () => {
  return (
    <>
      <Head>
        <title>Dwinovic | Online Resume </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <NavbarTop dark />
        <div className="h-4 bg-blue-200 2xl:hidden xl:hidden lg:hidden md:block sm:block"></div>
        <HeaderSection heading="Online Resume" btnTitle="Download as a PDF" />
        <div className="container mx-auto pt-8 flex relative">
          <div className="md:hidden sm:hidden lg:w-72 lg:block xl:block 2xl:inline">
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
