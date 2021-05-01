import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import AnchorText from '../AnchorText';
import Button from '../Button';
import Divider from '../Divider';
import Icon from '../Icon';
import { CSSTransition } from 'react-transition-group';

const NavbarTop = ({ dark, light }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="android:block iphone:block md:block sm:block lg:hidden lg:hidden xl:hidden 2xl:hidden ">
      <div
        className={` ${
          light ? 'bg-white fixed' : 'bg-gray-500 fixed top-0'
        } z-10 inset-x-0 ${open ? 'rounded-br-2xl rounded-bl-2xl' : ''}`}
      >
        <div className="py-4 px-8 flex justify-between">
          <Link href="/">
            <a>
              <h1
                className={`text-2xl font-bold font-poppins ${
                  light
                    ? 'text-black-400'
                    : 'android:text-white iphone:text-white sm:text-white md:text-black-300 hover:text-white'
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
          <div className="android:hidden iphone:hidden sm:hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <AnchorText dark={dark ? true : false} href="/">
                  Home
                </AnchorText>
              </li>
              <li>
                <AnchorText dark={dark ? true : false} href="/portfolios">
                  Projects
                </AnchorText>
              </li>
              <li>
                <AnchorText dark={dark ? true : false} href="/resume">
                  Resume
                </AnchorText>
              </li>
              <li>
                <AnchorText dark={dark ? true : false} href="/bookmarks">
                  Bookmarks
                </AnchorText>
              </li>
              <li>
                <AnchorText dark={dark ? true : false} href="/contact">
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
            <div className="mt-4 mb-8 navbartop ">
              <div className="flex justify-center space-x-4 mb-4">
                <Icon
                  icon={dark ? 'linkedin-light' : 'linkedin'}
                  hover
                  circle
                  href="https://www.linkedin.com/in/dwinovic/"
                />
                <Icon
                  icon={dark ? 'twitter-light' : 'twitter'}
                  hover
                  circle
                  href="https://twitter.com/dwinovic_"
                />
                <Icon
                  icon={dark ? 'medium-light' : 'medium'}
                  hover
                  circle
                  href="https://medium.com/@dwinovic"
                />
                <Icon
                  icon={dark ? 'instagram-light' : 'instagram'}
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
                  <AnchorText dark={dark ? true : false} href="/">
                    Home
                  </AnchorText>
                </li>
                <li>
                  <AnchorText dark={dark ? true : false} href="/portfolios">
                    Projects
                  </AnchorText>
                </li>
                <li>
                  <AnchorText dark={dark ? true : false} href="/resume">
                    Resume
                  </AnchorText>
                </li>
                <li>
                  <AnchorText dark={dark ? true : false} href="/bookmarks">
                    Bookmarks
                  </AnchorText>
                </li>
                <li>
                  <AnchorText dark={dark ? true : false} href="/contact">
                    Contact
                  </AnchorText>
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
