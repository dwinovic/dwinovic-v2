import React from 'react';
import { Heading, Paragraph } from '..';
import TagCapsule from '../TagCapsule';

const CardProject = () => {
  return (
    <a
      className="flex bg-yellow-500 rounded-md shadow-md hover:bg-yellow-600"
      href="/"
    >
      <img
        src="/image/coverskill.jpg"
        alt="skill"
        className="rounded-tl-md rounded-bl-md w-[100%]"
      />
      <div className="p-6">
        <Heading text="Staycation.com" as={5} />
        <div className="flex space-x-2 mb my-3.5">
          <TagCapsule textTag="Mongo DB" />
          <TagCapsule textTag="React JS" />
          <TagCapsule textTag="HTML" />
          <TagCapsule textTag="JavaScript" />
        </div>
        <Paragraph text="List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor." />
      </div>
    </a>
  );
};

export default CardProject;
