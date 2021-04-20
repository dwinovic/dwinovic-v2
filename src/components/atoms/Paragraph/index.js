import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ text, variant, addClass, color }) => {
  const colors = {
    dark: 'text-black-400',
    white: 'text-white',
  };
  const textVariant = {
    12: 'text-xs',
    14: 'text-sm',
    16: 'text-base',
  };

  const chooseVariant = textVariant[variant];

  return (
    <p
      className={`font-lato ${
        color === 'white' ? `${colors.white}` : `${colors.dark}`
      } mb-8 ${chooseVariant} ${addClass}`}
    >
      {text}
    </p>
  );
};

export default Paragraph;

Paragraph.propTypes = {
  variant: PropTypes.number,
};
