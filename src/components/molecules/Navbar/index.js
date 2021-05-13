import React from 'react';
import Image from 'next/image';
import { AnchorText, Button, Divider, Icon, NavButton } from '../../atoms';
import Link from 'next/link';

const index = () => {
  return (
    <div className="navbar-right">
      <h1>Dwinovic</h1>
      <p className="desc">
        Front-end developer who is also a React Engineer. Be able to make dream
        come true with React JS or React Native
      </p>
      <div className="icon-wrapper">
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
