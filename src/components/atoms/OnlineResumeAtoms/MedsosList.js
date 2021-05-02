import React from 'react';
import Icon from '../Icon';
import PropTypes from 'prop-types';

const MedsosList = ({ icon, link, title, size }) => {
  return (
    <a href={link} target="_blank" className="flex space-x-2 items-center">
      <Icon size={size ? `${size}` : 24} icon={icon} />
      <div className="font-lato text-xl text-black-500">{title}</div>
    </a>
  );
};

export default MedsosList;

MedsosList.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
};
