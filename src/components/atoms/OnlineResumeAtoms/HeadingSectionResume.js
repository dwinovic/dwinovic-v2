import React from 'react';
import PropTypes from 'prop-types';
import Divider from '../Divider';

const HeadingSectionResume = ({ Heading, desc, year, divider }) => {
  return (
    <div className="flex justify-between mb-2">
      <h4 className="font-poppins text-xl font-semibold text-black-400 tracking-wide">
        {Heading}
      </h4>
      <div className="flex space-x-2 items-center">
        <p className="font-lato text-md text-black-400">{desc}</p>
        {divider && <Divider vertical addClass="h-[18px]" />}
        {year && <p className="font-lato text-md text-black-400">{year}</p>}
      </div>
    </div>
  );
};

export default HeadingSectionResume;

HeadingSectionResume.propTypes = {
  Heading: PropTypes.string,
  desc: PropTypes.string,
  year: PropTypes.string,
  divider: PropTypes.bool,
};
