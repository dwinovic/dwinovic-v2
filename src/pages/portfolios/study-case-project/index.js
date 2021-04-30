import React from 'react';
import Head from 'next/head';
import {
  CoverHeadSection,
  HeadArticleProject,
  Heading,
  Icon,
  Navbar,
  ContentStudyCase,
  BodyContent,
} from '../../../components';

const StudyCaseProject = () => {
  return (
    <>
      <Head>
        <title>Dwinovic | Resume </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <CoverHeadSection />
        <BodyContent>
          <div className="w-full px-8 ">
            <HeadArticleProject />
            <ContentStudyCase />
          </div>
        </BodyContent>
      </body>
    </>
  );
};

export default StudyCaseProject;
