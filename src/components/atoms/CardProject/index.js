import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Heading, Paragraph } from '..';
import TagCapsule from '../TagCapsule';

const CardProject = ({ image, desc, title, tags, href, alternativeText }) => {
  const [cover, setCover] = useState('/gif/loading.gif');

  useEffect(() => {
    if (image) {
      setCover(image);
    }
  }, []);

  return (
    <Link href={`/portfolios/${href}`}>
      <a className="home-card-project wrapper" href="/">
        <div className="2xl:w-[60%] xl:w-[100%]  h-50%">
          <img
            src={cover}
            alt={alternativeText}
            className="rounded-tl-md rounded-bl-md lg:rounded-tr-md md:rounded-tr-md 2xl:w-full 2xl:h-full xl:w-full xl:h-full object-cover h-60 w-full"
          />
        </div>
        <div className="2xl:w-[100%] xl:w-[100%]  h-50% padding rounded-tr-md rounded-br-md ">
          <Heading text={title} as={3} addClass="lg:text-3xl" />
          <div className="flex space-x-2 my-3.5">
            {tags &&
              tags.map((tag) => (
                <TagCapsule key={tag.id} textTag={tag.tag_names} />
              ))}
          </div>
          <Paragraph
            addClass={
              'overflow-hidden 2xl:h-[120px] xl:h-[100px] lg:h-[120px] md:h-[120px] sm:h-[100px] iphone:h-[100px] android:h-[100px]'
            }
          >
            {desc}
          </Paragraph>
        </div>
      </a>
    </Link>
  );
};

export default CardProject;
