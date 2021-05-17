import React, { useEffect, useState } from 'react';
import { setDateFull } from '../../../utils';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import TagCapsule from '../TagCapsule';
import Fade from 'react-reveal/Fade';

const CardPost = ({ title, desc, date, tags, image, href }) => {
  const [cover, setCover] = useState('/gif/loading.gif');
  const [dateBlog, setDateBlog] = useState('');

  useEffect(() => {
    image && setCover(image);
    setDateBlog(setDateFull(date));
  }, []);

  return (
    <Fade right cascade>
      <a
        target="_blank"
        href={href}
        className=" hover:opacity-90 bg-black-400 w-80 rounded-lg shadow-xl"
      >
        <img src={cover} className="rounded-tl-lg rounded-tr-lg" />
        <div className="p-4 ">
          <Heading text={title} as={5} color="text-white" />
          <div className="flex space-x-2 my-4">
            {tags &&
              tags.map((tag) => (
                <TagCapsule key={tag.id} textTag={tag.tag_names} disable />
              ))}
          </div>
          <Paragraph color="white" addClass={'overflow-hidden h-[150px]'}>
            {desc}
          </Paragraph>
          <p className="text-sm font-poppins text-black-200">{dateBlog}</p>
        </div>
      </a>
    </Fade>
  );
};

export default CardPost;
