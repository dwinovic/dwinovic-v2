import React from 'react';
import { Heading, HeadingSectionResume, Text } from '../../atoms';

const Skills = () => {
  return (
    <div className="portfolio mt-8">
      <Heading text="Skills" as={3} />
      <div className="skill-items">
        <div>
          <HeadingSectionResume Heading="Technical" />
          <Text>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React JS</li>
              <li>React Native</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap 4</li>
            </ul>
          </Text>
        </div>
        <div>
          <HeadingSectionResume Heading="Professional" />
          <Text>
            <ul>
              <li>Communication</li>
              <li>Team player</li>
              <li>Problem Solver</li>
              <li>Good Time Management</li>
            </ul>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Skills;
