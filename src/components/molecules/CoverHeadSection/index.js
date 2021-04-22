import Image from 'next/image';
import React from 'react';

const CoverHeadSection = () => {
  return (
    <img
      src="/image/imagecoverhead.jpg"
      className=" object-cover h-72 w-full"
    />
  );
};

export default CoverHeadSection;
