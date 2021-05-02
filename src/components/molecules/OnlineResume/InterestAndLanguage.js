import React from 'react';
import { Heading, Text } from '../../atoms';

const InterestAndLanguage = () => {
  return (
    <div className="flex mt-4 | 2xl:space-x-40 xl:space-x-36 lg:space-x-32 md:space-x-24 sm:space-x-16 android:space-x-10 iphone:space-x-8 |">
      <div>
        <Heading text="Interest" as={3} />
        <Text>
          <ul>
            <li>Travelling</li>
            <li>Cycling</li>
            <li>Swimming</li>
            <li>Learn something new</li>
            <li>Make more money</li>
          </ul>
        </Text>
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
