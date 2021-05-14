import Link from 'next/link';
import React from 'react';
import Heading from '../Heading';
import Icon from '../Icon';

const Navigation = ({ href, textNavigation, iconNav, target }) => {
  return (
    <Link href={!href ? '#' : `${href}`}>
      <a className="nav-items" target={target ? '_blank' : false}>
        <Icon icon={iconNav} size={20} />
        <p className="text">{textNavigation}</p>
      </a>
    </Link>
  );
};

const NavigationPost = ({ title, href }) => {
  return (
    <div className="navigation-post">
      <Navigation iconNav="back" href="/portfolios" textNavigation="Go Back" />
      <h1 className="title-project">{title}</h1>
      <Navigation
        iconNav="link"
        href={href}
        textNavigation="Visit Website"
        target
      />
    </div>
  );
};

export default NavigationPost;
