import Head from 'next/head';
import {
  BookmarkSection,
  CardProject,
  Footer,
  Navbar,
  ProjectSection,
  SectionHero,
  SkillSection,
  NavbarTop,
} from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dwinovic | Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <NavbarTop />
        <div className="container mx-auto pt-8 flex relative">
          <div className="md:hidden sm:hidden lg:w-72 lg:block xl:block 2xl:inline">
            <Navbar />
          </div>
          <div className="w-full px-8">
            <SectionHero />
            <SkillSection />
            <ProjectSection>
              <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 gap-4 mt-6">
                <CardProject />
                <CardProject />
                <CardProject />
                <CardProject />
              </div>
            </ProjectSection>
            <BookmarkSection />
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
