import Head from 'next/head';
import React from 'react';
import {
  BodyContent,
  ContentStudyCase,
  CoverHeadSection,
  Footer,
  NavigationPost,
} from '../../components';
import { fetchingData } from '../../utils';

const StudyCaseProject = ({ data }) => {
  return (
    <>
      <Head>
        <title>Dwinovic Project | {data.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <CoverHeadSection
          cover={data.cover_heading ? data.cover_heading.url : null}
          tags={data.tag_projects}
        />
        <BodyContent>
          <div className="content-project">
            <NavigationPost title={data.title} href={data.link_url} />
            <ContentStudyCase
              cover={data.cover ? data.cover.url : null}
              coverName={data.cover ? data.cover.name : null}
              client={data.client}
              year={data.projectDate}
              descIntro={data.desc_intro}
              desc={data.desc}
              tags={data.tag_projects}
            />
          </div>
        </BodyContent>
        <Footer />
      </div>
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
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetchingData(`/projects?slug=${slug}`);
  const data = res[0];

  return { props: { data } };
}
