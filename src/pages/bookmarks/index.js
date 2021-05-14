import moment from 'moment';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import {
  BodyContent,
  BookmarkItem,
  Footer,
  HeaderSection,
  NavbarTop,
  TagFilter,
} from '../../components';
import { fetchingData, reqDataHostName, setDateFull } from '../../utils';

const Bookmarks = ({ blogs, tagBlogs, sortDesc }) => {
  console.log(blogs);

  const [date, setDate] = useState([]);

  useEffect(() => {
    lastUpdateValue();
  }, []);

  const lastUpdateValue = () => {
    if (sortDesc.length > 0) {
      const lastUpdate = sortDesc[0];
      setDate(setDateFull(lastUpdate.createdAt));
      return `${date}`;
    } else {
      return null;
    }
  };

  return (
    <>
      <Head>
        <title>Dwinovic | Bookmarks </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className="bookmarks-body">
        <div>
          <NavbarTop dark />
          <div className="space"></div>
          <HeaderSection
            heading="The Bookmark Containers"
            desc="A page to collect and share useful content that I get about technology, motivation, mindfulness, and other productivities"
            btnTitle={date}
            btnInfo
          />
          <BodyContent>
            <div className="main-content">
              {/* <div className="flex flex-wrap w-[60%] mx-auto space-x-4 pt-4  items-center justify-center">
              {tagBlogs &&
                tagBlogs.map((tag) => (
                  <TagFilter tagText={tag.tag_name} key={tag.id} />
                ))}
            </div> */}
              {blogs.length > 0 ? (
                <div className="content-wrapper">
                  {blogs.map((blog) => (
                    <BookmarkItem
                      href={blog.url}
                      title={blog.title}
                      desc={blog.desc}
                      tags={blog.tag_blogs}
                      date={blog.createdAt}
                    />
                  ))}
                </div>
              ) : (
                <div className="delay-wrapper direction space-x space-y">
                  <div className="delay-item">
                    <Skeleton count={5} />
                  </div>
                  <div className="delay-item">
                    <Skeleton count={5} />
                  </div>
                </div>
              )}
            </div>
          </BodyContent>
        </div>

        <Footer />
      </body>
    </>
  );
};

export default Bookmarks;

export async function getStaticProps() {
  const blogs = await fetchingData('/blogs');
  const tagBlogs = await fetchingData('/tag-blogs');
  const sortDesc = await fetchingData('/blogs?_sort=createdAt:DESC');
  return {
    props: { blogs, tagBlogs, sortDesc },
  };
}
