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

const PortfolioPage = () => {
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
              <TagFilter tagText="React JS" />
              <TagFilter tagText="React JS" />
              <TagFilter tagText="React JS" />
              <TagFilter tagText="React JS" />
            </div>
            <ProjectSection headingOff>
              <div className="flex flex-col  space-y-6 items-center">
                <CardProjectPortfolio />
                <CardProjectPortfolio />
                <CardProjectPortfolio />
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
