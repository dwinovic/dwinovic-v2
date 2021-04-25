import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';

const Button = ({ title, icon, btnIcon, yellow, type, href, target }) => {
  const ButtonType = () => {
    if (type === 'fill') {
      return (
        <button
          className={` w-full items-center py-2 px-2 rounded-lg ${
            yellow
              ? 'bg-yellow-400 hover:bg-yellow-500'
              : 'bg-black-400 hover:bg-black-500'
          }`}
        >
          <p
            className={`font-poppins font-base ${
              yellow
                ? 'text-black-400 hover:text-black-500'
                : 'text-white hover:text-white'
            }`}
          >
            {title}
          </p>
        </button>
      );
    }
    // Button Content
    return (
      <button
        className={`flex space-x-2 items-center py-2 px-2 rounded-lg ${
          yellow
            ? 'bg-yellow-400 hover:bg-yellow-500'
            : 'bg-black-400 hover:bg-black-500'
        }`}
      >
        <p
          className={`font-poppins font-base ${
            yellow
              ? 'text-black-400 hover:text-black-500'
              : 'text-white hover:text-white'
          }`}
        >
          {title}
        </p>
      </button>
    );
  };
  const IsBtn = () => {
    if (btnIcon) {
      return (
        <button
          className={`flex space-x-2 items-center py-2 px-2 rounded-lg ${
            yellow
              ? 'bg-yellow-400 hover:bg-yellow-500'
              : 'bg-black-400 hover:bg-black-500'
          }`}
        >
          <Icon icon={icon} size={18} />
          <p
            className={`font-poppins font-base ${
              yellow
                ? 'text-black-400 hover:text-black-500'
                : 'text-white hover:text-white'
            }`}
          >
            {title}
          </p>
        </button>
      );
    }
    return <ButtonType />;
  };

  return (
    <>
      {target && (
        <Link href={`${href}`}>
          <a target="_blank">
            <IsBtn />
          </a>
        </Link>
      )}
      {!target && (
        <Link href={`${href}`}>
          <a>
            <IsBtn />
          </a>
        </Link>
      )}
    </>
  );
};

export default Button;

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  btnIcon: PropTypes.string,
  yellow: PropTypes.string,
  type: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  target: PropTypes.bool,
};
