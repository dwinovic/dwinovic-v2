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
          cover={data.cover ? data.cover.url : null}
          tags={data.tag_projects}
        />
        <BodyContent>
          <div className="w-full px-8 ">
            <NavigationPost title={data.title} />
            <ContentStudyCase
              cover={data.cover ? data.cover.url : null}
              client={data.client}
              year={data.created_at}
              coverName={data.cover ? data.cover.name : null}
            />
            {/* DUMMY */}
            <ContentStudyCase
              cover={data.cover ? data.cover.url : null}
              client={data.client}
              year={data.created_at}
              coverName={data.cover ? data.cover.name : null}
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
