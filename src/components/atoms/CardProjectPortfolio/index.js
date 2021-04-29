import Link from 'next/link';
import React from 'react';
import { Heading, Paragraph } from '..';
import TagCapsule from '../TagCapsule';

const CardProjectPortfolio = () => {
  return (
    <Link href="/portfolios/study-case-project">
      <a className="bg-yellow-500 rounded-md shadow-md hover:bg-yellow-600 android:w-full iphone:w-full sm:w-full md:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[80%] h-auto">
        <img
          src="/image/coverskill.jpg"
          alt="skill"
          className="android:hidden iphone:inline iphone:w-full md:inline md:w-full lg:w-full xl:w-full 2xl:w-full rounded-tl-md rounded-tr-md  object-cover  h-72 box-border"
        />
        <div className="p-4">
          <Heading text="Staycation.com" as={3} />
          <div className="flex space-x-2 mb my-3.5">
            <TagCapsule textTag="Mongo DB" disable />
            <TagCapsule textTag="React JS" disable />
            <TagCapsule textTag="HTML" disable />
            <TagCapsule textTag="JavaScript" disable />
          </div>
          <Paragraph addClass="text-justify">
            List skills/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </Paragraph>
          <div className="block h-8"></div>
          <p className="text-sm font-poppins text-black-300">
            Published 2 days ago
          </p>
        </div>
      </a>
    </Link>
  );
};

export default CardProjectPortfolio;
