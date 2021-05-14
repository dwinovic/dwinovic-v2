import Head from 'next/head';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import {
  BodyContent,
  CardProjectPortfolio,
  Footer,
  HeaderSection,
  NavbarTop,
  ProjectSection,
} from '../../components';
import { fetchingData, reqDataHostName } from '../../utils';

const PortfolioPage = ({ projects, tagProjects, errorMessage }) => {
  return (
    <>
      <Head>
        <title>Dwinovic | Portfolios </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="h-screen flex flex-col justify-between">
        <div>
          <NavbarTop dark />
          <div className="h-16 bg-blue-200 2xl:hidden xl:hidden lg:hidden md:block sm:block"></div>
          <HeaderSection
            heading="Project and portfolios"
            desc="Welcome to my online portfolio. Here are some of the projects that I have completed. With pleasure, I'm open if there is an offer to collaborate on a project with me. Come to know me more closely, please contact me."
            btnTitle="Hire Me"
            href="https://www.linkedin.com/in/dwinovic/"
          />

          <BodyContent>
            <div className="w-full px-8 ">
              {/* <div className="flex space-x-4 pt-4 justify-center">
              {tagProjects &&
                tagProjects.map((tag) => (
                  <TagFilter key={tag.id} tagText={tag.tag_name} />
                ))}
            </div> */}
              <ProjectSection headingOff addClass="-mt-0">
                <div className="flex flex-col  space-y-6 items-center">
                  {typeof projects === 'object' ? (
                    projects.map((project) => (
                      <CardProjectPortfolio
                        key={project.id}
                        image={
                          project.cover
                            ? `${reqDataHostName(project.cover.url)}`
                            : null
                        }
                        desc={project.desc_intro}
                        title={project.title}
                        year={project.projectDate}
                        tags={project.tag_projects}
                        slug={project.slug}
                      />
                    ))
                  ) : (
                    <div className="w-[80%]">
                      <Skeleton count={5} />
                    </div>
                  )}
                </div>
              </ProjectSection>
            </div>
          </BodyContent>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;

export async function getStaticProps() {
  try {
    const projects = await fetchingData('/projects');
    const tagProjects = await fetchingData('/tag-projects');
    return {
      props: { projects, tagProjects },
    };
  } catch (error) {
    const errorMessage = error;
    return {
      props: { errorMessage },
    };
  }
}
