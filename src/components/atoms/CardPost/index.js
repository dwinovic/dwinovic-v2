import React from 'react';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import TagCapsule from '../TagCapsule';

const CardPost = () => {
  return (
    <a className="hover:bg-black-500 bg-black-400 w-80 rounded-lg shadow-xl">
      <img src="/image/blogpost.jpg" className="rounded-tl-lg rounded-tr-lg" />
      <div className="p-4 ">
        <Heading text="How to Make Dream Come True" as={5} color="text-white" />
        <div className="flex space-x-2 my-4">
          <TagCapsule textTag="Life" disable />
          <TagCapsule textTag="Life" disable />
        </div>
        <Paragraph
          text="List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."
          color="white"
        />
        <p className="text-sm font-poppins text-black-200">
          Published 2 days ago
        </p>
      </div>
    </a>
  );
};

export default CardPost;
