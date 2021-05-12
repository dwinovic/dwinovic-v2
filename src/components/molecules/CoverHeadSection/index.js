import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { reqDataHostName } from '../../../utils';
import { Heading } from '../../atoms';
import PropTypes from 'prop-types';

const CoverHeadSection = ({ cover, title }) => {
  console.log(cover);
  const [header, setHeader] = useState('/image/imagecoverhead.jpg');

  useEffect(() => {
    setHeader(reqDataHostName(cover));
  }, []);

  return (
    <div
      className={`flex justify-center items-center ${
        !cover ? 'bg-black-400 py-16' : ''
      }`}
    >
      {/* <Heading text={title} as={1} color="text-white uppercase" /> */}
      {cover && (
        <img src={header} className="object-cover h-80 w-full -z-10 relative" />
      )}
    </div>
  );
};

export default CoverHeadSection;

CoverHeadSection.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
};
