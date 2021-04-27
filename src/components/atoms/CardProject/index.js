import React from 'react';
import { Heading, Paragraph } from '..';
import TagCapsule from '../TagCapsule';

const CardProject = () => {
  return (
    <a
      className="flex 2xl:flex-row xl:flex-row lg:flex-col bg-yellow-500 rounded-md shadow-md hover:bg-yellow-600"
      href="/"
    >
      <img
        src="/image/coverskill.jpg"
        alt="skill"
        className="rounded-tl-md rounded-bl-md 2xl:w-[100%] 2xl:h-full xl:w-[40%] xl:h-full lg:w-full lg:h-52"
      />
      <div className="2xl:p-6 xl:py-4 xl:px-2 lg:p-4">
        <Heading text="Staycation.com" as={4} addClass="lg:text-3xl" />
        <div className="flex space-x-2 mb my-3.5">
          <TagCapsule textTag="Mongo DB" />
          <TagCapsule textTag="React JS" />
          <TagCapsule textTag="HTML" />
          <TagCapsule textTag="JavaScript" />
        </div>
        <Paragraph
          text="List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."
          addClass
        />
      </div>
    </a>
  );
};

export default CardProject;
