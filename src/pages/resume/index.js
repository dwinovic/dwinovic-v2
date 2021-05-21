import Head from 'next/head';
import {
  BodyContent,
  Footer,
  HeaderSection,
  NavbarTop,
  OnlineResume,
} from '../../components';
import { fetchingData } from '../../utils';

const Resume = ({ profile, experiences, projects, techSkills, proSkills }) => {
  const data = { profile, experiences, projects, techSkills, proSkills };

  return (
    <>
      <Head>
        <title>Dwinovic | Online Resume </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <NavbarTop dark />
        <div className="h-4 bg-blue-200 2xl:hidden xl:hidden lg:hidden md:block sm:block"></div>
        <HeaderSection
          heading="Online Resume"
          btnIcon
          btnTitle="Download Resume"
          href="https://www.linkedin.com/in/dwinovic/"
        />
        <BodyContent>
          <div className="flex w-full justify-center mb-8">
            <OnlineResume data={data} />
          </div>
        </BodyContent>
        <Footer />
      </div>
    </>
  );
};

export default Resume;

export async function getStaticProps() {
  const profile = await fetchingData('/resume-profiles');
  const experiences = await fetchingData('/resume-experiences');
  const projects = await fetchingData('/resume-projects');
  const techSkills = await fetchingData(
    '/resume-skills?_sort=tags:DESC&_where[0][tags]=technicals'
  );
  const proSkills = await fetchingData(
    '/resume-skills?_sort=tags:DESC&_where[0][tags]=professionals'
  );

  return {
    props: {
      profile,
      experiences,
      projects,
      techSkills,
      proSkills,
    },
  };
}
