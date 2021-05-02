import React from 'react';
import { Heading, HeadingSectionResume, Text } from '../../atoms';

const WorkExperience = () => {
  return (
    <div className="mt-8">
      <Heading text="Work Experience" as={3} />
      <HeadingSectionResume
        Heading="Front End Developer"
        desc="Freelance"
        year="2020 - 2021"
      />
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

export default WorkExperience;
