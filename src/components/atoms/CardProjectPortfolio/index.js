import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Heading, Paragraph } from '..';
import TagCapsule from '../TagCapsule';

const CardProjectPortfolio = ({ image, desc, title, tags, year }) => {
  const [cover, setCover] = useState('/image/coverskill.jpg');

  useEffect(() => {
    setCover(image);
  }, []);

  return (
    <Link href="/portfolios/study-case-project">
      <a className="bg-yellow-500 rounded-md shadow-md hover:bg-yellow-600 android:w-full iphone:w-full sm:w-full md:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[80%] h-auto">
        <img
          src={cover}
          alt="skill"
          className="android:hidden iphone:inline iphone:w-full md:inline md:w-full lg:w-full xl:w-full 2xl:w-full rounded-tl-md rounded-tr-md  object-cover  h-72 box-border"
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
          <p className="text-sm font-poppins text-black-300">{year}</p>
        </div>
      </a>
    </Link>
  );
};

export default CardProjectPortfolio;
