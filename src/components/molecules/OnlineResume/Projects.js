import React from 'react';
import { Heading, ProjectDescription } from '../../atoms';

const Projects = () => {
  return (
    <div className="mt-4">
      <Heading text="Projects" as={3} />
      <ProjectDescription title="Staycation.com" tag="exploration" />
      <ProjectDescription title="My Doctor App" tag="exploration" />
      <ProjectDescription title="Food Market" tag="exploration" />
      <ProjectDescription title="LuxSpace" tag="exploration" />
    </div>
  );
};

export default Projects;
