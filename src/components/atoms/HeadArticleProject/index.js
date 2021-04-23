import Link from 'next/link';
import React from 'react';
import Heading from '../Heading';
import Icon from '../Icon';

const Navigation = ({ href, textNavigation, iconNav }) => {
  return (
    <Link href={!href ? '#' : `${href}`}>
      <a className="flex space-x-2">
        <Icon icon={iconNav} size={20} />
        <p className="font-poppins text-md text-black-400 tracking-wide">
          {textNavigation}
        </p>
      </a>
    </Link>
  );
};

const index = () => {
  return (
    <div className="flex flex-col space-y-2">
      <Navigation
        iconNav="back"
        href="/portfolios"
        textNavigation="See All Project"
      />
      <Heading text="Project One" as={2} />
      <Navigation iconNav="link" textNavigation="Visit Website" />
    </div>
  );
};

export default index;
