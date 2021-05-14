import React from 'react';
import { Navbar } from '../../molecules';
import Fade from 'react-reveal/Fade';

const BodyContent = ({ children, fadeTop }) => {
  return (
    <div className="body-content-breakpoint">
      <div className="navbar-content-breakpoint">
        {fadeTop ? (
          <Fade top>
            <Navbar />
          </Fade>
        ) : (
          <Navbar />
        )}
      </div>
      {children}
    </div>
  );
};

export default BodyContent;
