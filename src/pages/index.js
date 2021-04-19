import Head from 'next/head';
import { Navbar, SectionHero, SkillSection } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dwinovic | Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <div className="container mx-auto pt-8 flex">
          <div className="w-72">
            <Navbar />
          </div>
          <div className="w-full px-8">
            <SectionHero />
            <SkillSection />
          </div>
        </div>
      </body>
    </>
  );
}
