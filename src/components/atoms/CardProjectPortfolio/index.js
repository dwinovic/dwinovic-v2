import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Heading, Paragraph } from '..';
import { setOnlyDate } from '../../../utils';
import TagCapsule from '../TagCapsule';

const CardProjectPortfolio = ({ image, desc, title, tags, year, slug }) => {
  const [cover, setCover] = useState('/image/coverskill.jpg');
  const [dateProject, setDateProject] = useState('');

  useEffect(() => {
    setCover(image);
    setDateProject(setOnlyDate(year));
  }, []);

  return (
    <Link href={`/portfolios/${slug}`}>
      <a className="bg-yellow-400 rounded-md shadow-md hover:opacity-90 android:w-full iphone:w-full sm:w-full md:w-full lg:w-[90%] xl:w-[90%] 2xl:w-[90%] h-auto">
        <img
          src={cover}
          alt="skill"
          className="android:hidden iphone:inline iphone:w-full md:inline md:w-full lg:w-full xl:w-full 2xl:w-full rounded-tl-md rounded-tr-md  object-contents  h-90 box-border"
        />
        <div className="p-4">
          <Heading text={title} as={3} />
          <div className="flex space-x-2 mb my-3.5">
            {tags &&
              tags.map((tag) => (
                <TagCapsule key={tag.id} textTag={tag.tag_name} disable />
              ))}
          </div>
          <Paragraph addClass="text-justify">{desc}</Paragraph>
          <div className="block h-8"></div>
          <p className="text-sm font-poppins text-black-300">{dateProject}</p>
        </div>
      </a>
    </Link>
  );
};

export default CardProjectPortfolio;
