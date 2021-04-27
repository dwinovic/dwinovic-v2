import Image from 'next/image';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const Icon = ({ icon, href, hover, circle, size }) => {
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
      case 'linkedin-light':
        return settypeIcon('ic-linkedin-light.svg');
      case 'twitter-light':
        return settypeIcon('ic-twitter-light.svg');
      case 'medium-light':
        return settypeIcon('ic-medium-light.svg');
      case 'instagram-light':
        return settypeIcon('ic-instagram-light.svg');
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
      case 'download':
        return settypeIcon('ic-download.svg');
      case 'wa':
        return settypeIcon('ic-wa.svg');
      case 'email':
        return settypeIcon('ic-email.svg');
      case 'location':
        return settypeIcon('ic-location.svg');
      case 'web':
        return settypeIcon('ic-web.svg');
      case 'github':
        return settypeIcon('ic-github.svg');
      case 'burger':
        return settypeIcon('ic-burger.svg');
      case 'burger-light':
        return settypeIcon('ic-burger-light.svg');

      default:
        return settypeIcon('ic-linkedin.svg');
    }
  };

  const hoverVariant = {
    dark: 'hover:bg-black-300',
    light: 'hover:bg-yellow-300',
  };

  return (
    <div>
      <a
        target={href ? '_blank' : null}
        href={href}
        className="flex items-center justify-center"
      >
        <Image
          src={`/icons/${typeIcon}`}
          height={size ? `${size}` : 30}
          width={size ? `${size}` : 30}
          className={`${hover ? `${hoverVariant.light}` : null} ${
            circle ? 'rounded-full' : null
          }  scale-100 `}
        />
      </a>
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.string,
  href: PropTypes.string,
  hover: PropTypes.string,
  circle: PropTypes.bool,
  size: PropTypes.number,
};

export default Icon;
