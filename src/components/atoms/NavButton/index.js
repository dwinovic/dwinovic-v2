import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';

const NavButton = (props) => {
  const { icon, title, link } = props;
  return (
    <a className="flex flex-row items-center space-x-1 " href={link}>
      <Icon icon={icon} className="" />
      <h3 className="font-poppins font-medium text-base hover:text-white">
        {title}
      </h3>
    </a>
  );
};

export default NavButton;

NavButton.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
};
