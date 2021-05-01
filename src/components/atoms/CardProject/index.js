import React, { useEffect, useState } from 'react';
import { Heading, Paragraph } from '..';
import TagCapsule from '../TagCapsule';

const CardProject = ({ image, desc, title, tags }) => {
  const [cover, setCover] = useState('/image/coverskill.jpg');

  useEffect(() => {
    setCover(image);
  }, []);

  return (
    <a
      className="flex 2xl:flex-row xl:flex-row lg:flex-col flex-col bg-yellow-500 rounded-md shadow-md hover:bg-yellow-600"
      href="/"
    >
      <div className="2xl:w-[60%] xl:w-[100%]  h-50%">
        <img
          src={cover}
          alt="skill"
          className="rounded-tl-md rounded-bl-md lg:rounded-tr-md md:rounded-tr-md 2xl:w-full 2xl:h-full xl:w-full xl:h-full object-cover h-60 w-full"
        />
      </div>
      <div className="2xl:w-[100%] xl:w-[100%]  h-50% 2xl:p-6 xl:py-4 xl:px-2 p-4 rounded-tr-md rounded-br-md ">
        <Heading text={title} as={4} addClass="lg:text-3xl" />
        <div className="flex space-x-2 mb my-3.5">
          {tags &&
            tags.map((tag) => (
              <TagCapsule key={tag.id} textTag={tag.tag_name} />
            ))}
        </div>
        <Paragraph addClass>{desc}</Paragraph>
      </div>
    </a>
  );
};

export default CardProject;
