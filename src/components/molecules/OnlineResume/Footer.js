import React from 'react';
import { MedsosList } from '../../atoms';

const Footer = () => {
  return (
    <>
      <div className="pt-8 flex justify-center android:hidden iphone:hidden sm:hidden md:inline-flex lg:inline-flex xl:inline-flex 2xl:inline-flex | md:space-x-2 lg:space-x-4 xl:space-x-6 2xl:space-x-8 |">
        <MedsosList
          title="github.com/dwinovic"
          link="https://github.com/dwinovic"
          icon="github"
        />
        <MedsosList
          title="@dwinovic"
          link="https://twitter.com/dwinovic_"
          icon="twitter"
        />
        <MedsosList
          title="Novi Dwi Cahya"
          link="https://www.linkedin.com/in/dwinovic/"
        />
      </div>
      <div className="|android:inline iphone:inline sm:inline md:hidden lg:hidden xl:hidden 2xl:hidden |">
        <div className="flex justify-center space-x-10 pt-8">
          <MedsosList
            size={32}
            link="https://github.com/dwinovic"
            icon="github"
          />
          <MedsosList
            size={32}
            link="https://twitter.com/dwinovic_"
            icon="twitter"
          />
          <MedsosList size={32} link="https://www.linkedin.com/in/dwinovic/" />
        </div>
      </div>
    </>
  );
};

export default Footer;
