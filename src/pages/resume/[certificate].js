import Head from 'next/head';
import React from 'react';
import {
  BodyContent,
  CertificateGalery,
  CoverHeadSection,
  Footer,
  NavigationPost,
} from '../../components';

const CertificateOfExpertise = ({ data }) => {
  return (
    <>
      <Head>
        <title>Dwinovic Project |</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <CoverHeadSection title="Certificate Of Expertise" />
        <BodyContent>
          <div className="w-full px-8 ">
            <NavigationPost />
            <CertificateGalery />
            {/* <ContentStudyCase /> */}
            {/* DUMMY */}
            {/* <ContentStudyCase /> */}
          </div>
        </BodyContent>
        <Footer />
      </body>
    </>
  );
};

export default CertificateOfExpertise;
