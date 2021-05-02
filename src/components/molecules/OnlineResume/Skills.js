import React from 'react';
import { Heading, HeadingSectionResume, Text } from '../../atoms';

const Skills = () => {
  return (
    <div className="mt-8">
      <Heading text="Skills" as={3} />
      <div className="flex | 2xl:space-x-40 xl:space-x-36 lg:space-x-32 md:space-x-24 sm:space-x-16 android:space-x-10 iphone:space-x-8 |">
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
