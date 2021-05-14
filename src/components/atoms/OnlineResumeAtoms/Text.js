import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children }) => {
  return (
    <p className="font-lato text-lg text-black-400 text-justify">{children}</p>
  );
};

export default Text;

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
