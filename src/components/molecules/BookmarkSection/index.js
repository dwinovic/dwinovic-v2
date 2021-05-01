import React from 'react';
import { Button, CardPost, HeadingSection, Section } from '../../atoms';
import { reqDataHostName } from '../../../utils';

const BookmarkSection = ({ data }) => {
  return (
    <Section>
      <HeadingSection text="Latest Bookmarks Posts" />
      <div className="overflow-x-scroll w-[100%] h-[580px] relative">
        <div className="mt-6 flex space-x-4 absolute">
          {data &&
            data.map((blog) => (
              <CardPost
                image={reqDataHostName(blog.image_cover.url)}
                title={blog.title}
                desc={blog.desc}
                tags={blog.tag_blogs}
                date={blog.create_at}
              />
            ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <Button title="More Posts" yellow href="/bookmarks" />
      </div>
    </Section>
  );
};

export default BookmarkSection;
