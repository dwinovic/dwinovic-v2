import React from 'react';
import { Heading, Paragraph } from '..';
import TagCapsule from '../TagCapsule';

const CardProject = () => {
  return (
    <a
      className="flex 2xl:flex-row xl:flex-row lg:flex-col flex-col bg-yellow-500 rounded-md shadow-md hover:bg-yellow-600"
      href="/"
    >
      <div className="2xl:w-[80%] xl:w-[100%]  h-50%">
        <img
          src="/image/coverskill.jpg"
          alt="skill"
          className="rounded-tl-md rounded-bl-md lg:rounded-tr-md md:rounded-tr-md 2xl:w-full 2xl:h-full xl:w-full xl:h-full object-cover h-60 w-full"
        />
      </div>
      <div className="2xl:p-6 xl:py-4 xl:px-2 p-4  rounded-tr-md rounded-br-md ">
        <Heading text="Staycation.com" as={4} addClass="lg:text-3xl" />
        <div className="flex space-x-2 mb my-3.5">
          <TagCapsule textTag="Mongo DB" />
          <TagCapsule textTag="React JS" />
          <TagCapsule textTag="HTML" />
          <TagCapsule textTag="JavaScript" />
        </div>
        <Paragraph addClass>
          List skills/technologies here. You can change the icon above to any of
          the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula
          eget dolor
        </Paragraph>
      </div>
    </a>
  );
};

export default CardProject;
