import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const Icon = ({ icon, link, hover, circle, size }) => {
  const [typeIcon, settypeIcon] = useState('');

  useEffect(() => {
    iconCheck();
  }, []);

  const iconCheck = () => {
    switch (icon) {
      case 'linkedin':
        return settypeIcon('ic-linkedin.svg');
      case 'twitter':
        return settypeIcon('ic-twitter.svg');
      case 'medium':
        return settypeIcon('ic-medium.svg');
      case 'instagram':
        return settypeIcon('ic-instagram.svg');
      case 'home':
        return settypeIcon('ic-home.svg');
      case 'star':
        return settypeIcon('ic-star.svg');
      case 'resume':
        return settypeIcon('ic-resume.svg');
      case 'bookmarks':
        return settypeIcon('ic-bookmarks.svg');
      case 'contact':
        return settypeIcon('ic-contact.svg');
      case 'send':
        return settypeIcon('ic-send.svg');
      case 'check':
        return settypeIcon('ic-check.svg');
      case 'send-dark':
        return settypeIcon('ic-send-dark.svg');
      case 'back':
        return settypeIcon('ic-back.svg');
      case 'link':
        return settypeIcon('ic-link.svg');
      default:
        return settypeIcon('ic-linkedin.svg');
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
