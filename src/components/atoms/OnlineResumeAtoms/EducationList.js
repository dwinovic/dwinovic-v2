import React from 'react';
import PropTypes from 'prop-types';
import HeadingSectionResume from './HeadingSectionResume';
import Text from './Text';
import Link from 'next/link';

const EducationList = ({ title, desc }) => {
  return (
    <div className="">
      <HeadingSectionResume Heading={title} />
      <Text>{desc}</Text>
      {/* Later Fiture */}
      {/* <Link href="/resume/certificate">
        <a>Ceritficate Of Expertise</a>
      </Link> */}
    </div>
  );
};

export default EducationList;

EducationList.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};
