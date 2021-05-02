import React, { useEffect, useState } from 'react';
import { setDateFull, setMonthYear } from '../../../utils';

const Footer = () => {
  const [date, setDate] = useState();

  useEffect(() => {
    const date = new Date();
    setDate(setMonthYear(date));
  }, []);

  return (
    <footer className="py-6 flex justify-center">
      <p className="2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base iphone:text-base android:text-base font-poppins font-semibold text-black-200 tracking-wider text-center">
        Made with love by Me | Since Feb 2021 Until {date}
      </p>
    </footer>
  );
};

export default Footer;
