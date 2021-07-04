import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { CardSkill } from '..';
import { HeadingSection, Paragraph, Section } from '../../atoms';

const index = ({ data }) => {
  console.log(data);
  const [showSkills, setShowSkills] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (data.length > 0) {
  //       setShowSkills(true);
  //     }
  //   }, 3000);
  // }, []);
  useEffect(() => {
      if (data.length > 0) {
        setShowSkills(true);
      }
  }, []);

  const ItemSkills = () => {
    return data.map((skill) => (
      <CardSkill
        key={skill.id}
        icon={skill.icon ? skill.icon.url : null}
        title={skill.title}
        desc={skill.desc}
      />
    ));
  };
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
      <div className="skill-items">
        {!showSkills && (
          <>
            <Skeleton count={5} />
            <Skeleton count={5} />
            <Skeleton count={5} />
            <Skeleton count={5} />
          </>
        )}
        {showSkills && <ItemSkills />}
      </div>
    </Section>
  );
};

export default index;
