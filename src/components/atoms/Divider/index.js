import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ addClass }) => {
  return (
    <div
      className={`w-full h-0.5 rounded-full bg-black-500 bg-opacity-25 ${addClass} rounded-full bg-grey-500`}
    />
  );
};

export default Divider;

Divider.propTypes = {
  addClass: PropTypes.string,
};
