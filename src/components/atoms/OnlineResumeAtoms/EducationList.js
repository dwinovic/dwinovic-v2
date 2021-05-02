import React from 'react';
import PropTypes from 'prop-types';
import HeadingSectionResume from './HeadingSectionResume';
import Text from './Text';

const EducationList = ({ title, desc }) => {
  return (
    <div className="mt-4">
      <HeadingSectionResume Heading={title} />
      <Text>{desc}</Text>
    </div>
  );
};

export default EducationList;

EducationList.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};
