import React from 'react';
import { Button, Heading, Paragraph, Section } from '../../atoms';

const index = () => {
  return (
    <Section addClass="flex android:flex-col-reverse iphone:flex-col-reverse 2xl:flex-row xl:flex-row lg:flex-row md:flex-row">
      <div className="flex flex-col w-7/12  justify-center android:w-full iphone:w-full sm:w-full">
        <Heading as={3} text="Hi I'am" />
        <h1 className="font-bold font-poppins 2xl:text-7xl xl:text-6xl lg:text-6xl md:text-4xl sm:text-4xl  android:text-4xl iphone:text-4xl text-black-500 mb-4">
          Dwinovic
        </h1>
        <h2 id="hello">Hello</h2>
        <Paragraph variant={20}>
          <b>Front-end Developers</b> who are passionate about creating
          outstanding web apps or mobile apps. Now the technology stack that I
          use to make this happen with the <b>React ecosystem environment,</b>{' '}
          be it <b>React JS or React Native.</b> Has a deep interest in web and
          mobile development interface.
        </Paragraph>

        <div className="flex space-x-4">
          <Button
            title="View Portfolio"
            btnIcon
            icon="check"
            yellow
            href="/portfolios"
          />
          <Button title="View Resume" href="/resume" />
        </div>
      </div>
      <div className="flex items-center justify-center w-5/12 android:w-full iphone:w-full sm:w-full md:w-[50%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%]">
        <img
          src="/image/hero-profile.png"
          className="android:w-[80%] iphone:w-[80%] sm:w-[60%] md:w-full lg:w-full xl:w-full 2xl:w-full"
        />
      </div>
    </Section>
  );
};

export default index;
