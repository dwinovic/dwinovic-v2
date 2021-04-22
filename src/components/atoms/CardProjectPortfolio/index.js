import Link from 'next/link';
import React from 'react';
import { Heading, Paragraph } from '..';
import TagCapsule from '../TagCapsule';

const CardProjectPortfolio = () => {
  return (
    <Link href="/portfolios/study-case-project">
      <a className="bg-yellow-500 rounded-md shadow-md hover:bg-yellow-600 w-[80%] h-auto">
        <img
          src="/image/coverskill.jpg"
          alt="skill"
          className="rounded-tl-md rounded-tr-md  object-fill w-full h-72 box-border"
        />
        <div className="p-6">
          <Heading text="Staycation.com" as={3} />
          <div className="flex space-x-2 mb my-3.5">
            <TagCapsule textTag="Mongo DB" disable />
            <TagCapsule textTag="React JS" disable />
            <TagCapsule textTag="HTML" disable />
            <TagCapsule textTag="JavaScript" disable />
          </div>
          <Paragraph
            text="List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."
            addClass="text-justify"
          />
          <p className="text-sm font-poppins text-black-300">
            Published 2 days ago
          </p>
        </div>
      </a>
    </Link>
  );
};

export default CardProjectPortfolio;
