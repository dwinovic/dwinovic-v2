import React, { useState } from 'react';
import { Heading } from '..';
const TagFilter = ({ tagText }) => {
  return (
    <a
      className="mt-4 text-black-500  font-poppins text-md hover:font-semibold tracking-wide hover:bg-yellow-500 bg-yellow-300 px-2.5 py-0.5 rounded-md"
      href="#"
    >
      {tagText}
    </a>
  );
};

export default TagFilter;
