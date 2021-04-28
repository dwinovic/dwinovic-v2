import React from 'react';
import { Divider, Heading, Icon } from '../../atoms';

const ListItem = ({ size, icon, text }) => {
  return (
    <li className="flex items-center space-x-2">
      <Icon size={size} icon={icon} />
      <p className="font-poppins text-black-400 text-md">{text}</p>
    </li>
  );
};

const Text = ({ children }) => {
  return (
    <p className="font-lato text-lg text-black-400 text-justify">{children}</p>
  );
};

const HeadingSection = ({ Heading, desc, year, divider }) => {
  return (
    <div className="flex justify-between mb-2">
      <h4 className="font-poppins text-xl font-semibold text-black-400 tracking-wide">
        {Heading}
      </h4>
      <div className="flex space-x-2 items-center">
        <p className="font-lato text-md text-black-400">{desc}</p>
        {divider && <Divider vertical addClass="h-[18px]" />}
        {year && <p className="font-lato text-md text-black-400">{year}</p>}
      </div>
    </div>
  );
};

const EducationList = ({ title, desc }) => {
  return (
    <div className="mt-4">
      <HeadingSection Heading={title} />
      <Text>{desc}</Text>
    </div>
  );
};

const ProjectDescription = ({ title, tag }) => {
  return (
    <div className="mt-4">
      <HeadingSection Heading={title} desc={tag} />
      <Text>
        Summarise your career here. You can make a PDF version of your resume
        using our free Sketch template here. Donec quam felis, ultricies nec,
        pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
        quam felis,
      </Text>
    </div>
  );
};

const MedsosList = ({ icon, link, title }) => {
  return (
    <a href={link} target="_blank" className="flex space-x-2 items-center">
      <Icon size={24} icon={icon} />
      <div className="font-lato text-xl text-black-500">{title}</div>
    </a>
  );
};

const index = () => {
  return (
    <div className="w-[80%] bg-black-100 rounded-xl  p-8">
      {/* START: Heading Section */}
      <div className="flex mb-8 justify-between">
        <div className="">
          <Heading text="Novi Dwi Cahya" as={2} />
          <p className="font-poppins text-black-400 text-xl">
            Front End Developer
          </p>
        </div>
        <div className="flex">
          <Divider vertical />
          <ul className="ml-8 space-y-1 w-full">
            <ListItem text="62899876165" size={24} icon="wa" />
            <ListItem text="dwinovic@gmail.com" size={24} icon="email" />
            <ListItem text="www.dwinovic.com" size={24} icon="web" />
            <ListItem text="Madiun, Indonesia" size={24} icon="location" />
          </ul>
        </div>
      </div>
      <Divider horizontal />
      {/* END: Heading Section */}
      {/* START: Profile */}
      <div className="flex my-8 space-x-4">
        <img
          src="/image/profile.png"
          className=" 2xl:w-48 2xl:h-48 xl:w-44 xl:h-44 lg:w-40 lg:h-40 md:w-32 md:h-32 sm:w-32 sm:h-32"
        />

        <Text>
          Summarise your career here. You can make a PDF version of your resume
          using our free Sketch template here. Donec quam felis, ultricies nec,
          pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Donec quam felis,
        </Text>
      </div>
      <Divider horizontal />
      {/* END: Profile */}
      {/* START: Work Experience */}
      <div className="mt-8">
        <Heading text="Work Experience" as={3} />
        <HeadingSection
          Heading="Front End Developer"
          desc="Freelance"
          year="2020 - 2021"
        />
        <Text>
          Summarise your career here. You can make a PDF version of your resume
          using our free Sketch template here. Donec quam felis, ultricies nec,
          pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Donec quam felis,
        </Text>
      </div>
      {/* END: Work Experience */}
      {/* START: Skill */}
      <div className="mt-4">
        <Heading text="Skills" as={3} />
        <div className="flex space-x-32">
          <div>
            <HeadingSection Heading="Technical" />
            <Text>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React JS</li>
                <li>React Native</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap 4</li>
              </ul>
            </Text>
          </div>
          <div>
            <HeadingSection Heading="Professional" />
            <Text>
              <ul>
                <li>Communication</li>
                <li>Team player</li>
                <li>Problem Solver</li>
                <li>Good Time Management</li>
              </ul>
            </Text>
          </div>
        </div>
      </div>
      {/* END: Skill */}
      {/* START: Project */}
      <div className="mt-4">
        <Heading text="Projects" as={3} />
        <ProjectDescription title="Staycation.com" tag="exploration" />
        <ProjectDescription title="My Doctor App" tag="exploration" />
        <ProjectDescription title="Food Market" tag="exploration" />
        <ProjectDescription title="LuxSpace" tag="exploration" />
      </div>
      {/* END: Project */}
      {/* START: Language and Interest */}
      <div className="flex mt-4 space-x-60">
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
      {/* END: Language and Interest */}
      {/* START: Education */}
      <div className="mt-4 mb-10">
        <Heading text="Education" as={3} />
        <EducationList
          title="Petroleum Engineer"
          desc="Graduated from vocational highschool at SMKN 3 Madiun on 2018"
        />
        <EducationList
          title="Self-Taught Programmer"
          desc="Teaching myself to code since 2019"
        />
      </div>
      {/* END: Education */}
      <Divider horizontal />
      {/* START: Sosial Media */}
      <div className="pt-8 flex justify-center space-x-8">
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
      {/* END: Sosial Media */}
    </div>
  );
};

export default index;
