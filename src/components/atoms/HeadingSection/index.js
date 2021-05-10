import React from 'react';
import Heading from '../Heading';

const index = ({ text, addClass }) => {
  return (
    <div className="flex space-x-4">
      <div className="w-2 bg-yellow-500"></div>
      <Heading as={1} text={text} addClass={addClass} />
    </div>
  );
};

export default index;
