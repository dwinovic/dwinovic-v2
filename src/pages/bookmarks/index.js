import Head from 'next/head';
import {
  BookmarkItem,
  Footer,
  HeaderSection,
  Heading,
  Navbar,
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
        <HeaderSection
          heading="The Bookmarks About Software Development And Life"
          desc="Beberapa hal menarik yang saya temui di internet"
          btnTitle="Last Update: Mon, 8 Feb 2021 - 10.35 am"
          info
        />
        <div className="container mx-auto pt-8 flex relative">
          <div className="w-72">
            <Navbar />
          </div>
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
            <div className="grid grid-cols-3 mt-14 gap-4">
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
        </div>
      </body>
    </>
  );
};

export default Bookmarks;
