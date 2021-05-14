import React from 'react';
import { Button, Heading, Icon, Paragraph } from '../../atoms';
import PropTypes from 'prop-types';

const HeaderSection = ({
  btnTitle,
  heading,
  desc,
  btnInfo,
  btnSosmed,
  href,
  icon,
  hover,
}) => {
  return (
    <div className="header-section-component">
      <div className="header-wrapper">
        <Heading
          text={heading}
          as={1}
          color="text-white text-center"
          addClass="heading"
        />
        {desc && (
          <Paragraph color="white" addClass="paragraph" variant={20}>
            {desc}
          </Paragraph>
        )}
        {btnInfo && (
          <div className="btn-info-wrapper">
            <p className="btn-info-text">{btnTitle}</p>
          </div>
        )}
        {btnSosmed && (
          <div className="btn-sosmed-wrapper">
            <Icon
              icon="linkedin-light"
              hover="dark"
              circle
              href="https://www.linkedin.com/in/dwinovic/"
            />
            <Icon
              icon="twitter-light"
              hover="dark"
              circle
              href="https://twitter.com/dwinovic_"
            />
            <Icon
              icon="medium-light"
              hover="dark"
              circle
              href="https://medium.com/@dwinovic"
            />
            <Icon
              icon="instagram-light"
              hover="dark"
              circle
              href="https://www.instagram.com/dwinovic_/"
            />
          </div>
        )}
        {!btnInfo && !btnSosmed && (
          <Button
            addClass="mt-4"
            title={btnTitle}
            yellow
            btnIcon
            target
            icon={btnTitle === 'Hire Me' ? 'send-dark' : 'download'}
            href={href}
          />
        )}
      </div>
    </div>
  );
};

export default HeaderSection;

HeaderSection.propTypes = {
  btnTitle: PropTypes.string,
  heading: PropTypes.string,
  desc: PropTypes.string,
  btnInfo: PropTypes.string,
  btnSosmed: PropTypes.string,
  icon: PropTypes.string,
  hover: PropTypes.string,
};
