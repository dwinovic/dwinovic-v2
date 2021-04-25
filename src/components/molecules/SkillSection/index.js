import React from 'react';
import { CardSkill } from '..';
import { HeadingSection, Paragraph, Section } from '../../atoms';

const index = () => {
  return (
    <Section id="home-portfolio">
      <HeadingSection text="What I Do" />
      <Paragraph
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus quis ornare adipiscing ac cursus maecenas. Mauris habitasse non mi consequat. Laoreet feugiat nisi ac quam eleifend malesuada turpis consectetur. Aliquet ut aenean tristique purus suspendisse donec ut."
        addClass="mt-4"
      />
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        <CardSkill />
        <CardSkill />
        <CardSkill />
        <CardSkill />
        <CardSkill />
        <CardSkill />
        <CardSkill />
        <CardSkill />
      </div>
    </Section>
  );
};

export default index;
