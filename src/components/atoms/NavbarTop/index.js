import Link from 'next/link';
import React, { useState } from 'react';
import AnchorText from '../AnchorText';
import Button from '../Button';
import Divider from '../Divider';
import Icon from '../Icon';

const NavbarTop = () => {
  const [burger, setBurger] = useState(false);
  const onBurger = () => {
    console.log('Connect');
  };

  return (
    <div className="md:block sm:block lg:hidden lg:hidden xl:hidden 2xl:hidden">
      <div className="fixed bg-white z-10 inset-x-0 ">
        <div className="py-4 px-8 flex justify-between">
          <Link href="/">
            <a>
              <h1 className="text-2xl font-bold font-poppins text-black-400 tracking-wide uppercase text-center">
                Dwinovic
              </h1>
            </a>
          </Link>
          <div className="sm:block md:hidden">
            <a href={() => onBurger}>
              <Icon icon="burger" />
            </a>
          </div>
          <div className="sm:hidden md:block">
            <ul className="flex space-x-4">
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
          </div>
        </div>

        {/* Menu Burger */}
        <div className="my-4 sm:hidden">
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
            <Icon
              icon="medium"
              hover
              circle
              href="https://medium.com/@dwinovic"
            />
            <Icon
              icon="instagram"
              hover
              circle
              href="https://www.instagram.com/dwinovic_/"
            />
          </div>

          <div>
            <Divider horizontal />
          </div>

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
      </div>
    </div>
  );
};

export default NavbarTop;
