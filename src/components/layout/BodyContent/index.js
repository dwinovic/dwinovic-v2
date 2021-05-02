import React from 'react';
import { Navbar } from '../../molecules';

const BodyContent = ({ children }) => {
  return (
    <div className="sm:container md:container lg:container xl:container 2xl:container sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto pt-8 flex relative ">
      <div className="android:hidden iphone:hidden md:hidden sm:hidden lg:w-72 lg:block xl:block 2xl:inline">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default BodyContent;
