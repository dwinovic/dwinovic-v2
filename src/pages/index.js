import Head from 'next/head';
import Skeleton from 'react-loading-skeleton';
import {
  BodyContent,
  BookmarkSection,
  CardProject,
  Footer,
  NavbarTop,
  ProjectSection,
  SectionHero,
  SkillSection,
} from '../components';
import { fetchingData, reqDataHostName } from '../utils';

export default function Home({ projects, skills, blogs }) {
  console.info('Hi!!');
  return (
    <>
      <Head>
        <title>Dwinovic | Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <NavbarTop light />
        <BodyContent>
          <div className="main-content">
            <SectionHero />
            <SkillSection data={skills} />
            <ProjectSection
              withButton={typeof projects === 'object' ? true : false}
            >
              <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 gap-4 mt-6">
                {typeof projects === 'object' ? (
                  projects.map((project) => (
                    <CardProject
                      key={project.id}
                      image={
                        project.cover
                          ? `${reqDataHostName(project.cover.url)}`
                          : null
                      }
                      desc={project.desc}
                      title={project.title}
                      tags={project.tag_projects}
                      href={project.slug}
                    />
                  ))
                ) : (
                  <>
                    <Skeleton count={5} />
                    <Skeleton count={5} />
                  </>
                )}
              </div>
            </ProjectSection>
            <BookmarkSection data={blogs} />
          </div>
        </BodyContent>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const projects = await fetchingData('/projects');
  const skills = await fetchingData('/skills');
  const blogs = await fetchingData('/blogs');

  return {
    props: { projects, skills, blogs },
  };
}
