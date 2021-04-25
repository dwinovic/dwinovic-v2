import React from 'react';
import { Button, CardPost, HeadingSection, Section } from '../../atoms';

const BookmarkSection = () => {
  return (
    <Section>
      <HeadingSection text="Latest Bookmarks Posts" />
      <div className="mt-6 grid gap-28 grid-cols-4 ">
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </div>
      <div className="mt-8 flex justify-center">
        <Button title="More Posts" yellow href="/bookmarks" />
      </div>
    </Section>
  );
};

export default BookmarkSection;
