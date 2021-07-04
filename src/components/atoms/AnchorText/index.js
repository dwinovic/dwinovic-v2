import React from 'react';
import PropsTypes from 'prop-types';
import Link from 'next/link';
import Icon from '../Icon';

const AnchorText = ({ children, href, dark, icon }) => {
  return (
    <Link href={`${href}`}>
      <a
        className={`text-poppins text-base  active:text-yellow-400 ${
          dark
            ? 'text-black-200 hover:text-white'
            : 'text-black-500 hover:text-black-300'
        }`}
      >
        {icon && <Icon />}
        {children}
      </a>
    </Link>
  );
};

export default AnchorText;

AnchorText.propsTypes = {
  text: PropsTypes.string,
  href: PropsTypes.string,
  dark: PropsTypes.string,
};
