import React from 'react';

const BookmarkItem = () => {
  return (
    <div className="flex flex-col bg-black-400 py-5 px-4 rounded-md justify-between">
      <div>
        <h2 className="font-poppins 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xlg sm:text-2xl font-bold tracking-wide text-black-100 mb-4">
          Bookmarks Article
        </h2>
        <p className="text-black-200 font-lato text-lg tracking-wide mb-6">
          List skills/technologies here. You can change the icon above to any of
          the 1500+ FontAwesome 5 free icons available.{' '}
        </p>
      </div>
      <div className="flex">
        <p className="bg-black-300 rounded-full py-0.5 px-2 font-poppins capitalize tracking-wide text-black-600 text-sm w-auto">
          uploaded : 8 Feb 2021
        </p>
      </div>
    </div>
  );
};

export default BookmarkItem;
