import React from 'react';
import { Heading, Text } from '../../atoms';

const InterestAndLanguage = () => {
  return (
    <div className="interest">
      <div>
        <Heading text="Interest" as={3} />
        <ul className="list">
          <li>Travelling</li>
          <li>Cycling</li>
          <li>Swimming</li>
          <li>Learn something new</li>
          <li>Make more money</li>
        </ul>
      </div>
      <div>
        <Heading text="Languages" as={3} />
        <Text>Indonesia</Text>
        <Text>English</Text>
      </div>
    </div>
  );
};

export default InterestAndLanguage;
