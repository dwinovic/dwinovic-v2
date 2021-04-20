import React from 'react';
import { CardProject } from '../../atoms';

const index = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <CardProject />
      <CardProject />
      <CardProject />
      <CardProject />
    </div>
  );
};

export default index;
