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
  console.log(sortDesc);
  const [date, setDate] = useState('');

  useEffect(() => {}, []);

  const lastUpdateValue = () => {
    if (lastUpdate.length > 0) {
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
      <body className="h-screen flex flex-col justify-between">
        <div>
          <NavbarTop dark />
          <div className="h-16 bg-blue-200 2xl:hidden xl:hidden lg:hidden md:block sm:block"></div>
          <HeaderSection
            heading="The Bookmarks About Software Development And Life"
            desc="Beberapa hal menarik yang saya temui di internet"
            btnTitle={lastUpdateValue}
            btnInfo
          />
          <BodyContent>
            <div className="w-full px-8">
              {/* <div className="flex flex-wrap w-[60%] mx-auto space-x-4 pt-4  items-center justify-center">
              {tagBlogs &&
                tagBlogs.map((tag) => (
                  <TagFilter tagText={tag.tag_name} key={tag.id} />
                ))}
            </div> */}
              {blogs.length > 0 ? (
                <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                  {blogs.map((blog) => (
                    <BookmarkItem
                      href={blog.url}
                      title={blog.title}
                      desc={blog.desc}
                      tags={blog.tag_blogs}
                      date={blog.create_at}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex  | 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col iphone:flex-col android:flex-col |2xl:space-x-4 xl:space-x-4 lg:space-x-4 md:space-x-4 2xl:space-y-0 xl:space-y-0 lg:space-y-0 md:space-y-0 | sm:space-y-2 iphone:space-y-2 android:space-y-2 ">
                  <div className="2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full iphone:w-full android:w-full">
                    <Skeleton count={5} />
                  </div>
                  <div className="2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full iphone:w-full android:w-full">
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
