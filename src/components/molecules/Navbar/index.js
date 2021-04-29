import React from 'react';
import Image from 'next/image';
import { AnchorText, Button, Divider, Icon, NavButton } from '../../atoms';
import Link from 'next/link';

const index = () => {
  return (
    <div className="navbar-padding navbar-bg rounded-xl border-2 border-black-100 shadow-sm sticky top-8">
      <h1 className="text-2xl font-bold font-poppins text-black-500 text-center mb-4">
        Dwinovic
      </h1>
      <p className="font-poppins text-center mb-4 text-sm text-black-500 tracking-wide">
        Front-end developers currently create great web or mobile applications
        using the React environment
      </p>
      <div className="flex justify-center space-x-4 mb-4">
        <Icon
          icon="linkedin"
          hover
          circle
          href="https://www.linkedin.com/in/dwinovic/"
        />
        <Icon
          icon="twitter"
          hover
          circle
          href="https://twitter.com/dwinovic_"
        />
        <Icon icon="medium" hover circle href="https://medium.com/@dwinovic" />
        <Icon
          icon="instagram"
          hover
          circle
          href="https://www.instagram.com/dwinovic_/"
        />
      </div>
      <Divider horizontal />
      <ul className="flex flex-col mt-4 mb-6 space-y-2 items-center">
        <li>
          <AnchorText href="/">Home</AnchorText>
        </li>
        <li>
          <AnchorText href="/portfolios">Projects</AnchorText>
        </li>
        <li>
          <AnchorText href="/resume">Resume</AnchorText>
        </li>
        <li>
          <AnchorText href="/bookmarks">Bookmarks</AnchorText>
        </li>
        <li>
          <AnchorText href="/contact">Contact</AnchorText>
        </li>
      </ul>
      <div className="flex justify-center">
        <Button
          title="Hire Me"
          btnIcon
          icon="send"
          href="https://www.linkedin.com/in/dwinovic/"
          target
        />
      </div>
    </div>
  );
};

export default index;
