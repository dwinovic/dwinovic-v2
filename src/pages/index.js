import Head from 'next/head';
import {
  BookmarkSection,
  CardProject,
  Footer,
  Navbar,
  ProjectSection,
  SectionHero,
  SkillSection,
} from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dwinovic | Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <div className="container mx-auto pt-8 flex relative">
          <div className="w-72">
            <Navbar />
          </div>
          <div className="w-full px-8">
            <SectionHero />
            <SkillSection />
            <ProjectSection>
              <div className="grid grid-cols-2 gap-4 mt-6">
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
