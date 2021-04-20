import React from 'react';
import { Projects } from '..';
import { Button, Heading, HeadingSection, Section } from '../../atoms';

function ProjectSection() {
  return (
    <Section>
      <HeadingSection text="Featured Project" />
      <Projects />
      <div className="mt-8 flex justify-center">
        <Button title="More Project" yellow />
      </div>
    </Section>
  );
}

export default ProjectSection;
