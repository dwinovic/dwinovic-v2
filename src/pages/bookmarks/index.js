import Head from 'next/head';
import {
  BodyContent,
  BookmarkItem,
  Footer,
  HeaderSection,
  NavbarTop,
  TagFilter,
} from '../../components';

const Bookmarks = () => {
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
          btnTitle="Last Update: Mon, 8 Feb 2021 - 10.35 am"
          btnInfo
        />
        <BodyContent>
          <div className="w-full px-8">
            <div className="flex flex-wrap w-[60%] mx-auto space-x-4 pt-4  items-center justify-center">
              <TagFilter tagText="Productive" />
              <TagFilter tagText="Technology" />
              <TagFilter tagText="Learn" />
              <TagFilter tagText="Success Story" />
              <TagFilter tagText="Desing" />
              <TagFilter tagText="Life" />
              <TagFilter tagText="Impact" />
              <TagFilter tagText="Impact" />
              <TagFilter tagText="Impact" />
              <TagFilter tagText="Impact" />
              <TagFilter tagText="Impact" />
              <TagFilter tagText="Impact" />
              <TagFilter tagText="Impact" />
              <TagFilter tagText="Impact" />
            </div>
            <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-14 gap-4">
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
            </div>
            <Footer />
          </div>
        </BodyContent>
      </body>
    </>
  );
};

export default Bookmarks;
