import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { CardSkill } from '..';
import { reqDataHostName } from '../../../utils';
import { HeadingSection, Paragraph, Section } from '../../atoms';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const index = ({ data }) => {
  return (
    <Section id="home-portfolio">
      <Fade top ssrFadeout>
        <HeadingSection text="What I Do" />
        <Paragraph variant={20} addClass="mt-4">
          I'm a self-taught programmer focusing on front-end developer
          specialists who have a deep passion and interest in web and mobile
          application development, especially on the client-side. The technology
          stack that I use right now is JavaScript programming language with the
          React Environment. Have an understanding of doing the UI UX Design
          process to support the creation of the best products. <br /> A learner
          who is always eager for knowledge and experience.
        </Paragraph>
      </Fade>
      <Zoom>
        <div className="skill-items">
          {typeof data === 'object' ? (
            data.map((skill) => (
              <CardSkill
                key={skill.id}
                icon={skill.icon ? reqDataHostName(skill.icon.url) : null}
                title={skill.title}
                desc={skill.desc}
              />
            ))
          ) : (
            <>
              <Skeleton count={5} />
              <Skeleton count={5} />
              <Skeleton count={5} />
              <Skeleton count={5} />
            </>
          )}
          {!data && <p>Kosong</p>}
        </div>
      </Zoom>
    </Section>
  );
};

export default index;
