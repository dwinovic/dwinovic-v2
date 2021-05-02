import React from 'react';
import HeadingSectionResume from './HeadingSectionResume';
import Text from './Text';
import PropTypes from 'prop-types';

const ProjectDescription = ({ title, tag, desc }) => {
  return (
    <div className="mt-4">
      <HeadingSectionResume Heading={title} desc={tag} />
      <Text>
        Summarise your career here. You can make a PDF version of your resume
        using our free Sketch template here. Donec quam felis, ultricies nec,
        pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
        quam felis,
      </Text>
    </div>
  );
};

export default ProjectDescription;

ProjectDescription.propTypes = {
  title: PropTypes.string,
  tag: PropTypes.string,
  desc: PropTypes.string,
};
