import React from 'react';
import Image from 'next/image';
import { Button, Divider, Icon, NavButton } from '../../atoms';

const index = () => {
  return (
    <div className="py-8 px-4 bg-white rounded-xl border-2 border-black-100 shadow-sm">
      <h1 className="text-2xl font-bold font-poppins text-black-500 text-center mb-4">
        Dwinovic
      </h1>
      <p className="font-poppins text-center mb-4 text-sm text-black-500 tracking-wide">
        I'm a software engineer specialised in web and mobile development for.
      </p>
      <div className="flex justify-center space-x-4 mb-4">
        <Icon icon="instagram" />
        <Icon icon="instagram" />
        <Icon icon="instagram" />
        <Icon icon="instagram" />
      </div>
      <Divider />
      <ul className="flex flex-col mt-4 mb-6 space-y-2 items-center">
        <li>
          <a className="text-poppins text-base hover:text-black-300">Home</a>
        </li>
        <li>
          <a className="text-poppins text-base hover:text-black-300">
            Portfolio
          </a>
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
        <Button title="Hire Me" />
      </div>
    </div>
  );
};

export default index;
