import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const Icon = ({ icon, link, hover, circle, size }) => {
  const [typeIcon, settypeIcon] = useState('');

  useEffect(() => {
    iconCheck();
  }, []);

  const iconCheck = () => {
    if (icon === 'linkedin') {
      settypeIcon('ic-linkedin.svg');
    }
    if (icon === 'twitter') {
      settypeIcon('ic-twitter.svg');
    }
    if (icon === 'medium') {
      settypeIcon('ic-medium.svg');
    }
    if (icon === 'instagram') {
      settypeIcon('ic-instagram.svg');
    }
    if (icon === 'home') {
      settypeIcon('ic-home.svg');
    }
    if (icon === 'star') {
      settypeIcon('ic-star.png');
    }
    if (icon === 'resume') {
      settypeIcon('ic-resume.svg');
    }
    if (icon === 'bookmarks') {
      settypeIcon('ic-bookmarks.svg');
    }
    if (icon === 'contact') {
      settypeIcon('ic-contact.svg');
    }
    if (icon === 'send') {
      settypeIcon('ic-send.svg');
    }
    if (icon === 'check') {
      settypeIcon('ic-check.svg');
    }
  };

  return (
    <div>
      <a
        target={link ? '_blank' : null}
        href={link}
        className="flex items-center justify-center"
      >
        <Image
          src={`/icons/${typeIcon}`}
          height={size ? `${size}` : 30}
          width={size ? `${size}` : 30}
          className={`${hover ? 'hover:bg-black-300' : null} ${
            circle ? 'rounded-full' : null
          }  scale-100 `}
        />
      </a>
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
};

export default Icon;
