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
import Skeleton from 'react-loading-skeleton';
import { useEffect, useState } from 'react';

export default function Home({ reqSkills, reqProjects, reqBlogs }) {
  const [skills, setSkills] = useState([]);
  const [projects, setProject] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setSkills(reqSkills);
    setProject(reqProjects);
    setBlogs(reqBlogs);
  }, []);

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
            <ProjectSection withButton={projects.length > 0 ? true : false}>
              <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 gap-4 mt-6">
                {projects.length > 0 ? (
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
  const reqSkills = await fetchingData('/skills');
  const reqProjects = await fetchingData('/projects');
  const reqBlogs = await fetchingData('/blogs');

  return {
    props: { reqSkills, reqProjects, reqBlogs },
  };
}
