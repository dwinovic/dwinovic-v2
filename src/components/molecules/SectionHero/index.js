import React from 'react';
import { Button, Heading, Paragraph, Section } from '../../atoms';
import Fade from 'react-reveal/Fade';

const index = () => {
  return (
    <Section addClass="hero">
      <Fade ssrFadeout top>
        <div className="content-wrapper">
          <Heading as={3} text="Hi I'am" />
          <Fade top ssrFadeout cascade>
            <h1 className="heading-hero">Dwinovic</h1>
          </Fade>

          <Paragraph variant={20}>
            <b>Front-end Developers</b> who are passionate about creating
            outstanding web apps or mobile apps. Now the technology stack that I
            use to make this happen with the <b>React ecosystem environment,</b>{' '}
            be it <b>React JS or React Native.</b> Has a deep interest in web
            and mobile development interface.
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
      </Fade>

      <Fade right>
        <div className="hero-profile-wrapper">
          <img src="/image/hero-profile.png" className="avatar" />
        </div>
      </Fade>
    </Section>
  );
};

export default index;
