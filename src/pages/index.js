import Head from 'next/head';
import {
  BookmarkSection,
  CardProject,
  Footer,
  ProjectSection,
  SectionHero,
  SkillSection,
  NavbarTop,
  BodyContent,
} from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dwinovic | Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <NavbarTop light />
        <BodyContent>
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
        </BodyContent>
      </div>
    </>
  );
}
