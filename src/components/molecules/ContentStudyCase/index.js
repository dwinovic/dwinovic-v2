import React, { useEffect, useState } from 'react';
import { setMonthYear } from '../../../utils';
import { Paragraph } from '../../atoms';
import TagCapsule from '../../atoms/TagCapsule';

const ContentStudyCase = ({
  cover,
  coverName,
  client,
  year,
  descIntro,
  tags,
  desc,
}) => {
  const [image, setImage] = useState('/gif/loading.gif');
  const [dateProject, setDateProject] = useState();
  useEffect(() => {
    setImage(cover);
    setDateProject(setMonthYear(year));
  }, []);
  return (
    <div className="content-study-case">
      <ul className="project-info">
        {client && <li className="client">Client : {client}</li>}
        <li className="date">Date Project: {dateProject}</li>
      </ul>
      <div className="tags-category">
        <p>Category:</p>
        <div className="tags-wrapper">
          {tags &&
            tags.map((tag) => (
              <TagCapsule key={tag.id} textTag={tag.tag_names} />
            ))}
        </div>
      </div>
      <Paragraph variant={20} fontFamily="font-poppins" addClass="my-4">
        {descIntro}
      </Paragraph>
      <div>
        <img src={image} className="cover" />
        <p className="pt-4 text-center font-lato text-black-400 italic tracking-wide">
          {coverName}
        </p>
      </div>
      <Paragraph variant={20} fontFamily="font-poppins" addClass="my-4">
        {desc}
      </Paragraph>
    </div>
  );
};

export default ContentStudyCase;
