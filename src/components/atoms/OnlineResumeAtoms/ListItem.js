import React from 'react';
import Icon from '../Icon';
import PropTypes from 'prop-types';

const ListItem = ({ size, icon, text, hover, href }) => {
  return (
    <a href={href} target="_blank">
      <li className="flex items-center space-x-2">
        <Icon icon={icon} hover={hover} size={size} circle href={href} />
        <p className="font-poppins text-black-400 text-md">{text}</p>
      </li>
    </a>
  );
};

export default ListItem;

ListItem.propTypes = {
  size: PropTypes.number,
  icon: PropTypes.string,
  text: PropTypes.string,
  hover: PropTypes.bool,
  href: PropTypes.string,
};
