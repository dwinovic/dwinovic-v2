import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Heading, Paragraph } from '..';
import { setOnlyDate } from '../../../utils';
import TagCapsule from '../TagCapsule';

const CardProjectPortfolio = ({ image, desc, title, tags, year, slug }) => {
  const [cover, setCover] = useState('/gif/loading.gif');
  const [dateProject, setDateProject] = useState('');

  useEffect(() => {
    setCover(image);
    setDateProject(setOnlyDate(year));
  }, []);

  return (
    <Link href={`/portfolios/${slug}`}>
      <a className="portfolio-cardproject responsive">
        <img src={cover} alt="skill" className="cover cover-responsive" />
        <div className="py-4 px-6">
          <Heading text={title} as={3} />
          <div className="flex space-x-2 mb my-3.5">
            {tags &&
              tags.map((tag) => (
                <TagCapsule key={tag.id} textTag={tag.tag_names} disable />
              ))}
          </div>
          <Paragraph addClass="text-justify" variant={20}>
            {desc}
          </Paragraph>
          <div className="block h-8"></div>
          <p className="text-md font-poppins text-black-300">{dateProject}</p>
        </div>
      </a>
    </Link>
  );
};

export default CardProjectPortfolio;
