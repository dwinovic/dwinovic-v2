import React from 'react';
import { Navbar } from '../../molecules';
import Fade from 'react-reveal/Fade';

const BodyContent = ({ children, fadeTop }) => {
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
