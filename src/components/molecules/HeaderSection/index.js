import React from 'react';
import { Button, Heading, Paragraph } from '../../atoms';

const HeaderSection = ({ btnTitle, heading, desc }) => {
  return (
    <div className="bg-gray-500">
      <div className="box-border p-10  flex flex-col items-center justify-center container mx-auto">
        <Heading text={heading} as={1} color="text-white" />
        <Paragraph
          text={desc}
          color="white"
          addClass="text-center mt-4 tracking-wide"
          variant={16}
        />
        <Button title={btnTitle} yellow btnIcon icon="send-dark" />
      </div>
    </div>
  );
};

export default HeaderSection;
