import moment from 'moment';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import {
  BodyContent,
  BookmarkItem,
  Footer,
  HeaderSection,
  NavbarTop,
  TagFilter,
} from '../../components';
import { fetchingData, reqDataHostName } from '../../utils';

const Bookmarks = ({ blogs, tagBlogs, lastUpdate }) => {
  const [date, setDate] = useState('');
  useEffect(() => {
    const string_date = lastUpdate.create_at;
    const date = moment(string_date).format('MMMM Do YYYY, h:mm a');
    const day = moment(string_date).format('dddd');
    setDate(`${day}, ${date}`);
  }, []);
  return (
    <>
      <Head>
        <title>Dwinovic | Bookmarks </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <NavbarTop dark />
        <div className="h-16 bg-blue-200 2xl:hidden xl:hidden lg:hidden md:block sm:block"></div>
        <HeaderSection
          heading="The Bookmarks About Software Development And Life"
          desc="Beberapa hal menarik yang saya temui di internet"
          btnTitle={!lastUpdate ? null : `${date}`}
          btnInfo
        />
        <BodyContent>
          <div className="w-full px-8">
            <div className="flex flex-wrap w-[60%] mx-auto space-x-4 pt-4  items-center justify-center">
              {tagBlogs &&
                tagBlogs.map((tag) => (
                  <TagFilter tagText={tag.tag_name} key={tag.id} />
                ))}
            </div>
            <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-14 gap-4">
              {blogs &&
                blogs.map((blog) => (
                  <BookmarkItem
                    title={blog.title}
                    desc={blog.desc}
                    tags={blog.tag_blogs}
                    date={blog.create_at}
                  />
                ))}
            </div>
            <Footer />
          </div>
        </BodyContent>
      </body>
    </>
  );
};

export default Bookmarks;

export async function getStaticProps() {
  const blogs = await fetchingData('/blogs');
  const tagBlogs = await fetchingData('/tag-blogs');
  const sortDesc = await fetchingData('/blogs?_sort=create_at:DESC');
  const lastUpdate = sortDesc[0];
  return {
    props: { blogs, tagBlogs, lastUpdate },
  };
}
