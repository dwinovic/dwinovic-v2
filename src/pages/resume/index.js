import Head from 'next/head';
import {
  Footer,
  HeaderSection,
  Navbar,
  OnlineResume,
  NavbarTop,
  BodyContent,
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
        <BodyContent>
          <div className="flex w-full justify-center mb-8">
            <OnlineResume />
          </div>
        </BodyContent>
        <Footer />
      </body>
    </>
  );
};

export default Resume;
