import PropTypes from 'prop-types';
import React from 'react';

const chooseIcon = (icon) => {
  switch (icon) {
    case 'linkedin':
      return 'ic-linkedin.svg';
    case 'twitter':
      return 'ic-twitter.svg';
    case 'medium':
      return 'ic-medium.svg';
    case 'instagram':
      return 'ic-instagram.svg';
    case 'linkedin-light':
      return 'ic-linkedin-light.svg';
    case 'twitter-light':
      return 'ic-twitter-light.svg';
    case 'medium-light':
      return 'ic-medium-light.svg';
    case 'instagram-light':
      return 'ic-instagram-light.svg';
    case 'home':
      return 'ic-home.svg';
    case 'star':
      return 'ic-star.svg';
    case 'resume':
      return 'ic-resume.svg';
    case 'bookmarks':
      return 'ic-bookmarks.svg';
    case 'contact':
      return 'ic-contact.svg';
    case 'send':
      return 'ic-send.svg';
    case 'check':
      return 'ic-check.svg';
    case 'send-dark':
      return 'ic-send-dark.svg';
    case 'back':
      return 'ic-back.svg';
    case 'link':
      return 'ic-link.svg';
    case 'download':
      return 'ic-download.svg';
    case 'wa':
      return 'ic-wa.svg';
    case 'email':
      return 'ic-email.svg';
    case 'location':
      return 'ic-location.svg';
    case 'web':
      return 'ic-web.svg';
    case 'github':
      return 'ic-github.svg';
    case 'burger':
      return 'ic-burger.svg';
    case 'burger-light':
      return 'ic-burger-light.svg';

    default:
      return 'ic-linkedin.svg';
  }
};

const Icon = ({ icon, href, hover, circle, size }) => {
  const hoverVariant = {
    dark: 'hover:bg-black-300',
    light: 'hover:bg-yellow-300',
  };

  const IconType = () => {
    if (!href) {
      return (
        <img
          src={`/icons/${chooseIcon(icon)}`}
          height={size ? `${size}` : 30}
          width={size ? `${size}` : 30}
          className={`${hover ? `${hoverVariant.light}` : null} ${
            circle ? 'rounded-full' : null
          }  scale-100 `}
        />
      );
    }
    return (
      <div>
        <a
          target={href ? '_blank' : null}
          href={href}
          className="flex items-center justify-center"
        >
          <img
            src={`/icons/${chooseIcon(icon)}`}
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

  return <IconType />;
};

Icon.propTypes = {
  icon: PropTypes.string,
  href: PropTypes.string,
  hover: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  circle: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Icon;
