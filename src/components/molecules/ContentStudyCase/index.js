import React from 'react';
import { Heading, Paragraph } from '../../atoms';

const ContentStudyCase = () => {
  return (
    <div className="mt-8">
      <div>
        <img src="/image/imagecoverhead.jpg" className="w-full" />
        <p className="pt-4 text-center font-lato text-black-400 italic tracking-wide">
          Projects One
        </p>
      </div>

      <ul className="">
        <li className="list-none font-poppins text-black-500 text-md">
          Client : Mr. Dwinov
        </li>
        <li className="list-none font-poppins text-black-500 text-md">
          Year: 2020
        </li>
      </ul>

      <Paragraph text="This project is a redesign and redevelop of Jala’s old website company profile. Jala is an IoT startup in Yogyakarta, Indonesia who provides solutions to help farmers understand the farm condition better in a real-time way for preventive actions towards the risk of farming. Currently, they have 2 products, the device that can detect water condition and a web app that integrated to the device so the farm owner can see their farm condition and eventually will have a better plan to get successful harvest." />
      <Heading text="The Problems" as={4} />
      <Paragraph text="This project is a redesign and redevelop of Jala’s old website company profile. Jala is an IoT startup in Yogyakarta, Indonesia who provides solutions to help farmers understand the farm condition better in a real-time way for preventive actions towards the risk of farming. Currently, they have 2 products, the device that can detect water condition and a web app that integrated to the device so the farm owner can see their farm condition and eventually will have a better plan to get successful harvest." />
    </div>
  );
};

export default ContentStudyCase;
