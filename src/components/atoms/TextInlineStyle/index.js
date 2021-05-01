import React from 'react';
import PropTypes from 'prop-types';

const TextInlineStyle = ({ children }) => {
  return <span className="hover:text-yellow-600 font-bold ">{children}</span>;
};

export default TextInlineStyle;

TextInlineStyle.propTypes = {
  children: PropTypes.element,
};
