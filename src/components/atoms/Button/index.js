import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';

const Button = ({
  title,
  icon,
  btnIcon,
  yellow,
  type,
  href,
  target,
  addClass,
  onClick,
}) => {
  const ButtonType = () => {
    if (type === 'fill') {
      return (
        <button
          className={`btn-fill ${yellow ? 'yellow' : 'gray'}`}
          onClick={onClick}
        >
          <p className={`font-poppins font-base ${yellow ? 'gray' : 'white'}`}>
            {title}
          </p>
        </button>
      );
    }
    // Button Content
    return (
      <button className={`btn-default ${yellow ? 'yellow' : 'gray'}`}>
        <p className={`font-poppins font-base ${yellow ? 'gray' : 'white'}`}>
          {title}
        </p>
      </button>
    );
  };
  const IsBtn = () => {
    if (btnIcon) {
      return (
        <button
          className={`btn-icon  ${addClass} ${yellow ? 'yellow' : 'gray'}`}
        >
          <Icon icon={icon} size={18} />
          <p className={`font-poppins font-base ${yellow ? 'gray' : 'white'}`}>
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
      {!target && href && (
        <Link href={`${href}`}>
          <a>
            <IsBtn />
          </a>
        </Link>
      )}
      {onClick && <IsBtn />}
    </>
  );
};

export default Button;

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  btnIcon: PropTypes.bool,
  yellow: PropTypes.bool,
  type: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  target: PropTypes.bool,
};
