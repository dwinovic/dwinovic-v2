import React from 'react';
import { Button, Heading, Paragraph } from '../../atoms';

const HeaderSection = ({ btnTitle, heading, desc, info }) => {
  return (
    <div className="bg-gray-500 h-72 flex items-center">
      <div className="box-border p-10  flex flex-col items-center justify-center container mx-auto space-y-8">
        <Heading text={heading} as={1} color="text-white" />
        {desc && (
          <Paragraph
            text={desc}
            color="white"
            addClass="text-center mt-4 tracking-wide"
            variant={16}
          />
        )}
        {info ? (
          <div className="bg-yellow-600 py-0.5 px-4 rounded-full">
            <p className="font-poppins tracking-wide text-black-600">
              {btnTitle}
            </p>
          </div>
        ) : (
          <Button title={btnTitle} yellow btnIcon icon="download" />
        )}
      </div>
    </div>
  );
};

export default HeaderSection;
