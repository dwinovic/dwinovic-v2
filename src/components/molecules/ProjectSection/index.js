import React from 'react';
import { Projects } from '..';
import { Button, Heading, HeadingSection, Section } from '../../atoms';
import PropTypes from 'prop-types';

function ProjectSection({ headingOff, children, addClass, withButton }) {
  const Heading = () => {
    if (headingOff) {
      return null;
    }
    return <HeadingSection text="Featured Project" />;
  };
  return (
    <Section addClass={addClass}>
      <Heading />
      {children}
      {/* <Projects /> */}
      {withButton && (
        <div className="mt-8 flex justify-center">
          <Button title="More Project" yellow href="/portfolios" />
        </div>
      )}
    </Section>
  );
}

export default ProjectSection;

ProjectSection.protoTypes = {
  headingOff: PropTypes.bool,
  children: PropTypes.element,
  withButton: PropTypes.bool,
};
