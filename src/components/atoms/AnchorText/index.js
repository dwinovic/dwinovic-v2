import React from 'react';
import PropsTypes from 'prop-types';
import Link from 'next/link';

const AnchorText = ({ children, href, dark }) => {
  return (
    <Link href={`${href}`}>
      <a
        className={`text-poppins text-base hover:text-black-300 active:text-yellow-400`}
      >
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
