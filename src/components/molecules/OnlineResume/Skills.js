import React from 'react';
import { Heading, HeadingSectionResume, Text } from '../../atoms';

const Skills = ({ techSkills, proSkills }) => {
  return (
    <div className="portfolio mt-8">
      <Heading text="Skills" as={3} />
      <div className="skill-items">
        <div>
          <HeadingSectionResume heading="Technical" />
          <ul className="list">
            {techSkills.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <HeadingSectionResume heading="Professional" />
          <ul className="list">
            {proSkills.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
