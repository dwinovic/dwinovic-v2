import React from 'react';
import { Divider, Heading, ListItem } from '../../atoms';

const Header = () => {
  return (
    <div className="flex mb-4 justify-between | 2xl:space-x-0 xl:space-x-0 lg:space-x-0 md:space-x-0 sm:space-y-4 iphone:space-y-4 android:space-y-4 | 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col iphone:flex-col android:flex-col |">
      <div className="">
        <Heading text="Novi Dwi Cahya" as={2} />
        <p className="font-poppins text-black-400 | 2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-base iphone:text-base android:text-base |">
          Front End Developer
        </p>
      </div>
      {/* START: Display Wide */}
      <div className="flex | android:hidden iphone:hidden md:inline-flex lg:inline-flex xl:inline-flex 2xl:inline-flex |">
        <Divider vertical />
        <ul className="w-full ml-8 | flex flex-col space-y-1 |">
          <ListItem
            text="62899876165"
            size={24}
            icon="wa"
            href="https://www.instagram.com/dwinovic_/"
          />
          <ListItem
            text="dwinovic@gmail.com"
            size={24}
            icon="email"
            href="https://www.instagram.com/dwinovic_/"
          />
          <ListItem
            text="www.dwinovic.com"
            size={24}
            icon="web"
            href="https://www.instagram.com/dwinovic_/"
          />
          <ListItem
            text="Madiun, Indonesia"
            size={24}
            icon="location"
            href="https://www.instagram.com/dwinovic_/"
          />
        </ul>
      </div>
      {/* END: Display Wide */}
      {/* START: Display Small */}
      <div className="| android:inline-flex flex-col space-y-2 iphone:inline-flex  md:hidden lg:hidden xl:hidden 2xl:hidden |">
        <ul className="flex space-x-1 |">
          <ListItem
            size={24}
            icon="wa"
            href="https://www.instagram.com/dwinovic_/"
          />
          <ListItem
            size={24}
            icon="email"
            href="https://www.instagram.com/dwinovic_/"
          />
          <ListItem
            size={24}
            icon="web"
            href="https://www.instagram.com/dwinovic_/"
          />
        </ul>
        <ListItem
          text="Madiun, Indonesia"
          size={24}
          icon="location"
          href="https://www.instagram.com/dwinovic_/"
        />
      </div>
      {/* END: Display Small */}
    </div>
  );
};

export default Header;
