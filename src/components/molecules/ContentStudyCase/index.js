import React, { useEffect, useState } from 'react';
import { reqDataHostName, setOnlyDate } from '../../../utils';
import { Heading, Paragraph } from '../../atoms';

const ContentStudyCase = ({ cover, coverName, client, year }) => {
  const [image, setImage] = useState('/image/imagecoverhead.jpg');
  const [dateProject, setDateProject] = useState();

  useEffect(() => {
    setImage(reqDataHostName(cover));
    setDateProject(setOnlyDate(year));
  }, []);
  return (
    <div className="mt-4">
      <div>
        <img src={image} className="w-full" />
        <p className="pt-4 text-center font-lato text-black-400 italic tracking-wide">
          {coverName}
        </p>
      </div>

      <ul className="">
        <li className="list-none font-poppins text-black-500 text-md">
          Client : {client}
        </li>
        <li className="list-none font-poppins text-black-500 text-md">
          Year: {dateProject}
        </li>
      </ul>

      <Paragraph>
        This project is a redesign and redevelop of Jala’s old website company
        profile. Jala is an IoT startup in Yogyakarta, Indonesia who provides
        solutions to help farmers understand the farm condition better in a
        real-time way for preventive actions towards the risk of farming.
        Currently, they have 2 products, the device that can detect water
        condition and a web app that integrated to the device so the farm owner
        can see their farm condition and eventually will have a better plan to
        get successful harvest.
      </Paragraph>
      <Heading text="The Problems" as={4} />
      <Paragraph>
        This project is a redesign and redevelop of Jala’s old website company
        profile. Jala is an IoT startup in Yogyakarta, Indonesia who provides
        solutions to help farmers understand the farm condition better in a
        real-time way for preventive actions towards the risk of farming.
        Currently, they have 2 products, the device that can detect water
        condition and a web app that integrated to the device so the farm owner
        can see their farm condition and eventually will have a better plan to
        get successful harvest.
      </Paragraph>
    </div>
  );
};

export default ContentStudyCase;
