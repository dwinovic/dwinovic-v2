import React, { useEffect, useState } from 'react';
import { setDateFull } from '../../../utils';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import TagCapsule from '../TagCapsule';

const CardPost = ({ title, desc, date, tags, image, href }) => {
  const [cover, setCover] = useState('/image/blogpost.jpg');
  const [dateBlog, setDateBlog] = useState('');

  useEffect(() => {
    image && setCover(image);
    setDateBlog(setDateFull(date));
  }, []);

  return (
    <a target="_blank" href={href} className="card-blog">
      <img src={cover} className="rounded-tl-lg rounded-tr-lg" />
      <div className="p-4 ">
        <Heading text={title} as={5} color="text-white" />
        <div className="flex space-x-2 my-4">
          {tags &&
            tags.map((tag) => <TagCapsule textTag={tag.tag_names} disable />)}
        </div>
        <Paragraph color="white" addClass={'content-overflow'}>
          {desc}
        </Paragraph>
        <p className="text-sm font-poppins text-black-200">{dateBlog}</p>
      </div>
    </a>
  );
};

export default CardPost;
