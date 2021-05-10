import React from 'react';
import { Button, Heading, Paragraph, Section } from '../../atoms';

const index = () => {
  return (
    <Section addClass="hero">
      <div className="content-wrapper">
        <Heading as={3} text="Hi I'am" />
        <h1 className="heading-hero">Dwinovic</h1>
        <Paragraph variant={20}>
          <b>Front-end Developers</b> who are passionate about creating
          outstanding web apps or mobile apps. Now the technology stack that I
          use to make this happen with the <b>React ecosystem environment,</b>{' '}
          be it <b>React JS or React Native.</b> Has a deep interest in web and
          mobile development interface.
        </Paragraph>

        <div className="flex space-x-4">
          <Button
            title="View Portfolio"
            btnIcon
            icon="check"
            yellow
            href="/portfolios"
          />
          <Button title="View Resume" href="/resume" />
        </div>
      </div>
      <div className="hero-profile-wrapper">
        <img src="/image/hero-profile.png" className="avatar" />
      </div>
    </Section>
  );
};

export default index;
