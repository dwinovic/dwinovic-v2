import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { reqDataHostName } from '../../../utils';
import { Heading } from '../../atoms';

const CoverHeadSection = ({ cover, title }) => {
  const [header, setHeader] = useState('/image/imagecoverhead.jpg');

  useEffect(() => {
    setHeader(reqDataHostName(cover));
  }, []);

  return (
    <div className="flex justify-center items-center">
      <Heading text={title} as={1} />
      <img src={header} className=" object-cover h-72 w-full -z-10" />;
    </div>
  );
};

export default CoverHeadSection;
