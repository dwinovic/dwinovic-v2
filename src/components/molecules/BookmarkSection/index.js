import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Fade from 'react-reveal/Fade';
import { Button, CardPost, HeadingSection, Section } from '../../atoms';

const BookmarkSection = ({ data }) => {
  const [showBlogs, setShowBlogs] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (data.length > 0) {
        setShowBlogs(true);
      }
    }, 3000);
  }, []);

  const ItemBlogs = () => {
    return (
      <div className="overflow-x-scroll w-[100%] h-[610px] relative">
        <div className="mt-6 flex space-x-4 absolute">
          {data.map((blog) => (
            <CardPost
              key={blog.id}
              href={blog.url}
              image={blog.images_cover ? blog.images_cover.url : null}
              title={blog.title}
              desc={blog.desc}
              tags={blog.tag_blogs}
              date={blog.create_at}
            />
          ))}
        </div>
      </div>
    );
  };
  return (
    <Section>
      <Fade top>
        <HeadingSection text="Latest Bookmarks Posts" />
      </Fade>
      {!showBlogs && (
        <div className="mt-6">
          <Skeleton count={6} />
        </div>
      )}
      {showBlogs && <ItemBlogs />}
      <div className="mt-8 flex justify-center">
        <Button title="More Posts" yellow href="/bookmarks" />
      </div>
    </Section>
  );
};

export default BookmarkSection;
