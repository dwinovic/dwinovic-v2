import React from 'react';
import Heading from '../Heading';

const index = ({ text }) => {
  return (
    <div className="flex space-x-4">
      <div className="w-2 bg-yellow-500"></div>
      <Heading as={1} text={text} />
    </div>
  );
};

export default index;
