import React from 'react';
import HeadingSectionResume from './HeadingSectionResume';
import Text from './Text';
import PropTypes from 'prop-types';

const ProjectDescription = ({ title, tag, desc }) => {
  return (
    <div className="mt-4">
      <HeadingSectionResume heading={title} desc={tag} />
      <Text>{desc}</Text>
    </div>
  );
};

export default ProjectDescription;

ProjectDescription.propTypes = {
  title: PropTypes.string,
  tag: PropTypes.string,
  desc: PropTypes.string,
};
