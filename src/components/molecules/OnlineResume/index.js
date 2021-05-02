import React from 'react';
import { Divider } from '../../atoms';
import Educations from './Educations';
import Footer from './Footer';
import Header from './Header';
import InterestAndLanguage from './InterestAndLanguage';
import ProfileDesc from './ProfileDesc';
import Projects from './Projects';
import Skills from './Skills';
import WorkExperience from './WorkExperience';

const OnlineResume = () => {
  return (
    <div className="w-[80%] bg-black-100 rounded-xl  p-8">
      <Header />
      <Divider horizontal />
      <ProfileDesc />
      <Divider horizontal />
      <WorkExperience />
      <Skills />
      <Projects />
      <InterestAndLanguage />
      <Educations />
      <Divider horizontal />
      <Footer />
    </div>
  );
};

export default OnlineResume;
