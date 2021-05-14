import React from 'react';
import { Heading, HeadingSectionResume, Text } from '../../atoms';

const Skills = ({ techSkills, proSkills }) => {
  console.log('skill', proSkills);
  return (
    <div className="portfolio mt-8">
      <Heading text="Skills" as={3} />
      <div className="skill-items">
        <div>
          <HeadingSectionResume heading="Technical" />
          <Text>
            <ul>
              {techSkills.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </Text>
        </div>
        <div>
          <HeadingSectionResume heading="Professional" />
          <Text>
            <ul>
              {proSkills.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Skills;
