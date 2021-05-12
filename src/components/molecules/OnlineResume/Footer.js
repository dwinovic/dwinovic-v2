import React from 'react';
import { MedsosList } from '../../atoms';

const Footer = () => {
  return (
    <>
      <div className="footer-portfolio">
        <div className="large ">
          <MedsosList
            title="github.com/dwinovic"
            link="https://github.com/dwinovic"
            icon="github"
          />
          <MedsosList
            title="@dwinovic"
            link="https://twitter.com/dwinovic_"
            icon="twitter"
          />
          <MedsosList
            title="Novi Dwi Cahya"
            link="https://www.linkedin.com/in/dwinovic/"
          />
        </div>
      </div>
      <div className="small">
        <div className="space">
          <MedsosList
            size={32}
            link="https://github.com/dwinovic"
            icon="github"
          />
          <MedsosList
            size={32}
            link="https://twitter.com/dwinovic_"
            icon="twitter"
          />
          <MedsosList size={32} link="https://www.linkedin.com/in/dwinovic/" />
        </div>
      </div>
    </>
  );
};

export default Footer;
