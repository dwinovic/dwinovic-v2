import React, { useEffect, useState } from 'react';
import { CardSkill } from '..';
import {
  HeadingSection,
  Paragraph,
  Section,
  TextInlineStyle,
} from '../../atoms';
import axios from 'axios';
import { reqDataHostName } from '../../../utils';

const index = ({ data }) => {
  return (
    <Section id="home-portfolio">
      <HeadingSection
        text="What I Do"
        addClass="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl"
      />
      <Paragraph variant={20} addClass="mt-4">
        I'm a self-taught programmer focusing on front-end developer specialists
        who have a deep passion and interest in web and mobile application
        development, especially on the client-side. The technology stack that I
        use right now is JavaScript programming with the React Environment. Have
        an understanding of doing the UI UX Design process to support the
        creation of the best products. <br /> A learner who is always eager for
        knowledge and experience.
      </Paragraph>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 gap-4 mt-4">
        {data &&
          data.map((skill) => (
            <CardSkill
              key={skill.id}
              icon={skill.icon ? reqDataHostName(skill.icon.url) : null}
              title={skill.skill_name}
              desc={skill.desc}
            />
          ))}
        {!data && <p>Kosong</p>}
      </div>
    </Section>
  );
};

export default index;
