import React from 'react';

const BookmarkItem = ({ title, desc, date, tags, image }) => {
  return (
    <div className="flex flex-col bg-black-400 py-5 px-4 rounded-md justify-between">
      <div>
        <h2 className="font-poppins 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xlg sm:text-2xl font-bold tracking-wide text-black-100 mb-4">
          {title}
        </h2>
        <p className="text-black-200 font-lato text-lg tracking-wide mb-6">
          {desc}
        </p>
      </div>
      <div className="flex">
        <p className="bg-black-300 rounded-full py-0.5 px-2 font-poppins capitalize tracking-wide text-black-600 text-sm w-auto">
          uploaded : {date}
        </p>
      </div>
    </div>
  );
};

export default BookmarkItem;
