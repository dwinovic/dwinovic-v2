import React from 'react';
import PropTypes from 'prop-types';

const Divider = (props) => {
  const { width, height } = props;

  return (
    // <div className=`h-${height} w-${width} rounded-full bg-grey-500`/>
    <div className="w-full h-0.5 rounded-full bg-black-500 bg-opacity-25"></div>
  );
};

export default Divider;

Divider.propTypes = {
  width: PropTypes.number,
  hight: PropTypes.number,
};
