import React, { useEffect, useState } from 'react';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import TagCapsule from '../TagCapsule';

const CardPost = ({ title, desc, date, tags, image }) => {
  const [cover, setCover] = useState('/image/blogpost.jpg');

  useEffect(() => {
    image && setCover(image);
  }, []);

  return (
    <a className="hover:bg-black-500 bg-black-400 w-80 rounded-lg shadow-xl ">
      <img src={cover} className="rounded-tl-lg rounded-tr-lg" />
      <div className="p-4 ">
        <Heading text={title} as={5} color="text-white" />
        <div className="flex space-x-2 my-4">
          {tags &&
            tags.map((tag) => <TagCapsule textTag={tag.tag_name} disable />)}
        </div>
        <Paragraph color="white">{desc}</Paragraph>
        <p className="text-sm font-poppins text-black-200">{date}</p>
      </div>
    </a>
  );
};

export default CardPost;
