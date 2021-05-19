import React from 'react';
import { Heading, HeadingSectionResume, Text } from '../../atoms';
import PropTypes from 'prop-types';

const WorkExperience = ({ title, subTitle, desc, data }) => {
  return (
    <div className="mt-8">
      <Heading text="Work Experience" as={3} />
      {data.map((item) => (
        <div key={item.id} className="mt-4">
          <HeadingSectionResume heading={item.title} desc={item.sub_title} />
          <Text>{item.desc}</Text>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;

WorkExperience.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  desc: PropTypes.string,
};
