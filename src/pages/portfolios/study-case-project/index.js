import React from 'react';
import Head from 'next/head';
import {
  CoverHeadSection,
  HeadArticleProject,
  Heading,
  Icon,
  Navbar,
  ContentStudyCase,
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
        <div className="container mx-auto pt-8 flex relative">
          <div className="w-72">
            <Navbar />
          </div>
          <div className="w-full px-8 ">
            <HeadArticleProject />
            <ContentStudyCase />
          </div>
        </div>
      </body>
    </>
  );
};

export default StudyCaseProject;
