import React from 'react';
import Image from 'next/image';
import { Button, Divider, Icon, NavButton } from '../../atoms';
import Link from 'next/link';

const index = () => {
  return (
    <div className="py-8 px-4 bg-white rounded-xl border-2 border-black-100 shadow-sm sticky top-8">
      <h1 className="text-2xl font-bold font-poppins text-black-500 text-center mb-4">
        Dwinovic
      </h1>
      <p className="font-poppins text-center mb-4 text-sm text-black-500 tracking-wide">
        I'm a software engineer specialised in web and mobile development for.
      </p>
      <div className="flex justify-center space-x-4 mb-4">
        <Icon icon="linkedin" hover circle />
        <Icon icon="twitter" hover circle />
        <Icon icon="medium" hover circle />
        <Icon icon="instagram" hover circle />
      </div>
      <Divider />
      <ul className="flex flex-col mt-4 mb-6 space-y-2 items-center">
        <li>
          <Link href="/">
            <a className="text-poppins text-base hover:text-black-300">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/portfolios">
            <a className="text-poppins text-base hover:text-black-300">
              Portfolio
            </a>
          </Link>
        </li>
        <li>
          <a className="text-poppins text-base  hover:text-black-300">Resume</a>
        </li>
        <li>
          <a className="text-poppins text-base hover:text-black-300">
            Bookmarks
          </a>
        </li>
        <li>
          <a className="text-poppins text-base hover:text-black-300">Contact</a>
        </li>
      </ul>
      <div className="flex justify-center">
        <Button title="Hire Me" btnIcon icon="send" />
      </div>
    </div>
  );
};

export default index;
