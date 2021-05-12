import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ text, children, variant, addClass, color }) => {
  const colors = {
    dark: 'text-black-400',
    white: 'text-white',
  };
  const textVariant = {
    12: '2xl:text-xs xl:text-xs lg:text-xs md:text-xs sm:text-xs iphone:text-xs android:text-xs',
    14: '2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-sm iphone:text-sm android:text-sm',
    16: '2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-sm iphone:text-sm android:text-sm',
    20: '2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base iphone:text-base android:text-base',
  };

  const chooseVariant = textVariant[variant];

  return (
    <p
      className={`font-lato ${
        color === 'white' ? `${colors.white}` : `${colors.dark}`
      } ${chooseVariant} ${
        addClass ? `${addClass} mb-8` : 'mb-8'
      } text-justify`}
    >
      {children}
    </p>
  );
};

export default Paragraph;

Paragraph.propTypes = {
  variant: PropTypes.number,
};
