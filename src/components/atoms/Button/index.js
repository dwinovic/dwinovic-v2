import React from 'react';
import Icon from '../Icon';

const Button = ({ title, icon }) => {
  return (
    <button className=" flex space-x-2 items-center bg-black-400 py-2 px-2 rounded-lg hover:bg-black-500">
      <Icon icon={icon} size={18} />
      <p className="text-white font-poppins font-base">{title}</p>
    </button>
  );
};

export default Button;
