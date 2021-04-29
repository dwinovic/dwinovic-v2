import React from 'react';
import { CardSkill } from '..';
import { HeadingSection, Paragraph, Section } from '../../atoms';

const index = () => {
  return (
    <Section id="home-portfolio">
      <HeadingSection
        text="What I Do"
        addClass="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl"
      />
      <Paragraph variant={20} addClass="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus quis
        ornare adipiscing ac cursus maecenas. Mauris habitasse non mi consequat.
        Laoreet feugiat nisi ac quam eleifend malesuada turpis consectetur.
        Aliquet ut aenean tristique purus suspendisse donec ut.
      </Paragraph>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 gap-4 mt-4">
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
