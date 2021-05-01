import Head from 'next/head';
import {
  BodyContent,
  CardProjectPortfolio,
  Footer,
  HeaderSection,
  NavbarTop,
  ProjectSection,
  TagFilter,
} from '../../components';
import { fetchingData, reqDataHostName } from '../../utils';

const PortfolioPage = ({ projects, tagProjects }) => {
  console.log(tagProjects);
  return (
    <>
      <Head>
        <title>Dwinovic | Portfolios </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <NavbarTop dark />
        <div className="h-16 bg-blue-200 2xl:hidden xl:hidden lg:hidden md:block sm:block"></div>
        <HeaderSection
          heading="Portfolio"
          desc="Welcome to my online portfolio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. I'm taking on freelance work at the moment. Want some help building your software?"
          btnTitle="Hire Me"
        />

        <BodyContent>
          <div className="w-full px-8 ">
            <div className="flex space-x-4 pt-4 justify-center">
              {tagProjects &&
                tagProjects.map((tag) => (
                  <TagFilter key={tag.id} tagText={tag.tag_name} />
                ))}
            </div>
            <ProjectSection headingOff>
              <div className="flex flex-col  space-y-6 items-center">
                {projects &&
                  projects.map((project) => (
                    <CardProjectPortfolio
                      key={project.id}
                      image={
                        project.image_cover
                          ? `${reqDataHostName(project.image_cover.url)}`
                          : null
                      }
                      desc={project.desc}
                      title={project.title}
                      year={project.year}
                      tags={project.tag_projects}
                    />
                  ))}
              </div>
            </ProjectSection>
            <Footer />
          </div>
        </BodyContent>
      </body>
    </>
  );
};

export default PortfolioPage;

export async function getStaticProps() {
  const projects = await fetchingData('/projects');
  const tagProjects = await fetchingData('/tag-projects');

  return {
    props: { projects, tagProjects },
  };
}
