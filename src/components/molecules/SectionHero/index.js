import React from 'react';
import { Button, Heading, Paragraph, Section } from '../../atoms';

const index = () => {
  return (
    <Section addClass="flex">
      <div className="flex flex-col w-7/12  justify-center">
        <Heading as={3} text="Hi I'am" />
        <h1 className="font-bold font-poppins text-7xl text-black-500 mb-4">
          Dwinovic
        </h1>
        <Paragraph
          variant={16}
          text="I'm a software engineer specialised in frontend and backend development
      for complex scalable web apps. I write about software development on my
      blog. Want to know how I may help your project? Check out my project
      portfolio and online resume."
        />
        <div className="flex space-x-4">
          <Button title="View Portfolio" btnIcon icon="check" yellow />
          <Button title="View Resume" />
        </div>
      </div>
      <div className="flex items-center justify-center w-5/12 ">
        <img src="/image/hero-profile.png" className="w-full" />
      </div>
    </Section>
  );
};

export default index;
