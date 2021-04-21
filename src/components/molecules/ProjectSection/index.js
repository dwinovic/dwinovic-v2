import React from 'react';
import { Projects } from '..';
import { Button, Heading, HeadingSection, Section } from '../../atoms';

function ProjectSection({ headingOff, children }) {
  const Heading = () => {
    if (headingOff) {
      return null;
    }
    return <HeadingSection text="Featured Project" />;
  };
  return (
    <Section>
      <Heading />
      {children}
      {/* <Projects /> */}
      <div className="mt-8 flex justify-center">
        <Button title="More Project" yellow />
      </div>
    </Section>
  );
}

export default ProjectSection;
