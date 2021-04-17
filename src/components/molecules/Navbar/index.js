import React from 'react';
import Image from 'next/image';
import { Button, Divider, Icon, NavButton } from '../../atoms';

const index = () => {
  return (
    <div className="container bg-yellow-500 w-72 h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-poppins text-black-500 font-bold mb-3">
        Dwinovic
      </h1>
      <Image src="/image/profile.png" alt="dwinovic" width={150} height={150} />
      <p className="text-sm text-black-400 font-poppins text-center my-6">
        I'm a software engineer specialised in web and mobile development for.
      </p>
      <div className="flex space-x-3 mb-4">
        <Icon icon="linkedin" link="" hover circle />
        <Icon icon="twitter" hover circle />
        <Icon icon="medium" hover circle />
        <Icon icon="instagram" hover circle />
      </div>
      <Divider />
      <div className="mt-4 space-y-1 mb-4">
        <NavButton icon="home" title="Home" />
        <NavButton icon="star" title="Portfolio" />
        <NavButton icon="resume" title="Resume" />
        <NavButton icon="bookmarks" title="Bookmarks" />
        <NavButton icon="contact" title="Contact" />
      </div>
      <Button title="Hire Me" icon="send" />
      <Divider />
    </div>
  );
};

export default index;
