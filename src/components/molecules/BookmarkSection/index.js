import React from 'react';
import { Button, CardPost, HeadingSection, Section } from '../../atoms';

const BookmarkSection = () => {
  return (
    <Section>
      <HeadingSection text="Latest Bookmarks Posts" />
      <div className="overflow-x-scroll w-[100%] h-[580px] relative">
        <div className="mt-6 flex space-x-4 absolute">
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <Button title="More Posts" yellow href="/bookmarks" />
      </div>
    </Section>
  );
};

export default BookmarkSection;
