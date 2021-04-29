import React from 'react';
import { Button, Heading, Icon, Paragraph } from '../../atoms';

const HeaderSection = ({
  btnTitle,
  heading,
  desc,
  btnInfo,
  btnSosmed,
  icon,
  hover,
}) => {
  return (
    <div className="bg-gray-500  flex items-center">
      <div className="box-border p-10  flex flex-col  items-center justify-center container mx-auto">
        <Heading text={heading} as={1} color="text-white text-center" />
        {desc && (
          <Paragraph
            color="white"
            addClass="text-center tracking-wide mt-2"
            variant={16}
          >
            {desc}
          </Paragraph>
        )}
        {btnInfo && (
          <div className="bg-yellow-600 py-0.5 px-4 mt-6 rounded-full">
            <p className="font-poppins tracking-wide text-black-600">
              {btnTitle}
            </p>
          </div>
        )}
        {btnSosmed && (
          <div className="flex space-x-4 mt-6">
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
            icon="download"
          />
        )}
      </div>
    </div>
  );
};

export default HeaderSection;
