import React from 'react';
import { Divider, Heading, ListItem } from '../../atoms';

const Header = () => {
  return (
    <div className="header responsive direction">
      <div>
        <Heading text="Novi Dwi Cahya" as={2} />
        <p className="jobs font">Front End Developer</p>
      </div>
      {/* START: Display Wide */}
      <div className="wrapper-contact-info">
        <Divider vertical />
        <ul className="contacts">
          <ListItem
            text="+62 8787 1469 919"
            size={24}
            icon="wa"
            href="http://wa.me/622087871469919"
          />
          <ListItem text="cahyo.dwinov@gmail.com" size={24} icon="email" />
          <ListItem
            text="www.dwinovic.com"
            size={24}
            icon="web"
            href="https://www.dwinovic.com"
          />
          <ListItem text="Madiun, Indonesia" size={24} icon="location" />
        </ul>
      </div>
      {/* END: Display Wide */}
      {/* START: Display Small */}
      <div className="small-container">
        <ul className="flex space-x-1">
          <ListItem
            size={24}
            icon="wa"
            href="https://www.instagram.com/dwinovic_/"
          />
          <ListItem
            size={24}
            icon="email"
            href="https://www.instagram.com/dwinovic_/"
          />
          <ListItem
            size={24}
            icon="web"
            href="https://www.instagram.com/dwinovic_/"
          />
        </ul>
        <ListItem
          text="Madiun, Indonesia"
          size={24}
          icon="location"
          href="https://www.instagram.com/dwinovic_/"
        />
      </div>
      {/* END: Display Small */}
    </div>
  );
};

export default Header;
