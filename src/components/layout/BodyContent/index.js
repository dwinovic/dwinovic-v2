import React from 'react';
import { Navbar } from '../../molecules';

const BodyContent = ({ children }) => {
  return (
    <div className="body-content-breakpoint">
      <div className="navbar-content-breakpoint">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default BodyContent;
