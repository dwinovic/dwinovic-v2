import Head from 'next/head';
import React from 'react';
import {
  BodyContent,
  ContentStudyCase,
  CoverHeadSection,
  NavigationPost,
} from '../../components';
import { fetchingData } from '../../utils';

const StudyCaseProject = ({ data }) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>Dwinovic Project | {data.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <CoverHeadSection
          cover={data.image_cover ? data.image_cover.url : null}
          title={data.title}
        />
        <BodyContent>
          <div className="w-full px-8 ">
            <NavigationPost />
            <ContentStudyCase
              cover={data.image_cover ? data.image_cover.url : null}
              client={data.client}
              year={data.created_at}
              coverName={data.image_cover ? data.image_cover.name : null}
            />
            {/* DUMMY */}
            <ContentStudyCase
              cover={data.image_cover ? data.image_cover.url : null}
              client={data.client}
              year={data.created_at}
              coverName={data.image_cover ? data.image_cover.name : null}
            />
          </div>
        </BodyContent>
      </body>
    </>
  );
};

export default StudyCaseProject;

export async function getStaticPaths() {
  const projects = await fetchingData('/projects');

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetchingData(`/projects?slug=${slug}`);
  const data = res[0];
  return { props: { data } };
}
