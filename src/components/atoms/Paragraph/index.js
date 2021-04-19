import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ text, variant }) => {
  const textVariant = {
    12: 'text-xs',
    14: 'text-sm',
    16: 'text-base',
  };

  const chooseVariant = textVariant[variant];

  return (
    <p className={`font-lato text-black-400 mb-8 ${chooseVariant}`}>{text}</p>
  );
};

export default Paragraph;

Paragraph.propTypes = {
  variant: PropTypes.number,
};
