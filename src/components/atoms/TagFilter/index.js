import React, { useState } from 'react';
import { Heading } from '..';
const TagFilter = ({ tagText }) => {
  return (
    <a className={`flex flex-col items-center`} href="#">
      <p
        className={`text-black-500  font-poppins text-md hover:font-semibold tracking-wide hover:bg-yellow-500 bg-black-100 px-2.5 py-0.5 rounded-md`}
      >
        {tagText}
      </p>
    </a>
  );
};

export default TagFilter;
