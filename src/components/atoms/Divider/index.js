import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ addClass, horizontal, vertical }) => {
  return (
    <div
      className={` ${horizontal && 'w-full h-0.5'} ${
        vertical && 'w-0.5'
      } rounded-full bg-black-500 bg-opacity-25 ${addClass} rounded-full bg-grey-500`}
    />
  );
};

export default Divider;

Divider.propTypes = {
  addClass: PropTypes.string,
};
