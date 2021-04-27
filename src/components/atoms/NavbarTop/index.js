import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import AnchorText from '../AnchorText';
import Button from '../Button';
import Divider from '../Divider';
import Icon from '../Icon';
import { CSSTransition } from 'react-transition-group';

const NavbarTop = ({ dark, light }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log(open);
  }, []);

  return (
    <div className="md:block sm:block lg:hidden lg:hidden xl:hidden 2xl:hidden">
      <div
        className={` ${
          light ? 'bg-white fixed' : 'bg-gray-500 sticky top-0'
        } z-10 inset-x-0 `}
      >
        <div className="py-4 px-8 flex justify-between">
          <Link href="/">
            <a>
              <h1
                className={`text-2xl font-bold font-poppins ${
                  light ? 'text-black-400' : 'text-black-100'
                } tracking-wide uppercase text-center`}
              >
                Dwinovic
              </h1>
            </a>
          </Link>
          <div className="sm:block md:hidden">
            <button onClick={() => setOpen(!open)}>
              <Icon icon={`${light ? 'burger' : 'burger-light'}`} />
            </button>
          </div>
          <div className="sm:hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <AnchorText dark href="/">
                  Home
                </AnchorText>
              </li>
              <li>
                <AnchorText dark href="/portfolios">
                  Projects
                </AnchorText>
              </li>
              <li>
                <AnchorText dark href="/resume">
                  Resume
                </AnchorText>
              </li>
              <li>
                <AnchorText dark href="/bookmarks">
                  Bookmarks
                </AnchorText>
              </li>
              <li>
                <AnchorText dark href="/contact">
                  Contact
                </AnchorText>
              </li>
            </ul>
          </div>
        </div>

        {/* Menu Burger */}
        {open && (
          <CSSTransition
            in={open}
            timeout={3000}
            classNames="navbartop"
            unmountOnExit
            onEnter={() => setOpen(false)}
            onExited={() => setOpen(true)}
          >
            <div className="my-4 navbartop">
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
          </CSSTransition>
        )}
      </div>
    </div>
  );
};

export default NavbarTop;
