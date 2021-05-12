import Link from 'next/link';
import React from 'react';
import Heading from '../Heading';
import Icon from '../Icon';

const Navigation = ({ href, textNavigation, iconNav }) => {
  return (
    <Link href={!href ? '#' : `${href}`}>
      <a className="flex space-x-2  items-center">
        <Icon icon={iconNav} size={20} />
        <p className="font-poppins text-md text-black-400 tracking-wide hover:text-yellow-600">
          {textNavigation}
        </p>
      </a>
    </Link>
  );
};

const NavigationPost = ({ title }) => {
  return (
    <div className="flex flex items-center bg-white  sticky top-0 py-4 -z-10  justify-around">
      <Navigation iconNav="back" href="/portfolios" textNavigation="Go Back" />
      <h1 className="title-project">{title}</h1>
      <Navigation iconNav="link" textNavigation="Visit Website" />
    </div>
  );
};

export default NavigationPost;
