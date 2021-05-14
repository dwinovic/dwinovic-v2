import React from 'react';
import { Heading, ProjectDescription } from '../../atoms';

const Projects = ({ data }) => {
  return (
    <div className="mt-4">
      <Heading text="Projects" as={3} />
      {data.map((item) => (
        <ProjectDescription
          key={item.id}
          title={item.title}
          tag={item.category}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default Projects;
