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
import { fetchingData, reqDataHostName } from '../utils';

export default function Home({ skills, projects, blogs }) {
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
            <SkillSection data={skills} />
            <ProjectSection>
              <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 gap-4 mt-6">
                {projects &&
                  projects.map((project) => (
                    <CardProject
                      key={project.id}
                      image={
                        project.image_cover
                          ? `${reqDataHostName(project.image_cover.url)}`
                          : null
                      }
                      desc={project.desc}
                      title={project.title}
                      tags={project.tag_projects}
                    />
                  ))}
              </div>
            </ProjectSection>
            <BookmarkSection data={blogs} />
            <Footer />
          </div>
        </BodyContent>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const skills = await fetchingData('/skills');
  const projects = await fetchingData('/projects');
  const blogs = await fetchingData('/blogs');

  return {
    props: { skills, projects, blogs },
  };
}
