import React, { useEffect, useState } from 'react';
import { reqDataHostName } from '../../../utils';
import { Divider } from '../../atoms';
import Educations from './Educations';
import Footer from './Footer';
import Header from './Header';
import InterestAndLanguage from './InterestAndLanguage';
import ProfileDesc from './ProfileDesc';
import Projects from './Projects';
import Skills from './Skills';
import WorkExperience from './WorkExperience';

const OnlineResume = ({ data }) => {
  const { profile, experiences, projects, techSkills, proSkills } = data;

  return (
    <div className="online-resume">
      <Header />
      <Divider horizontal />
      <ProfileDesc
        desc={profile[0].desc_profile}
        profile={
          profile[0].image_profile
            ? reqDataHostName(profile[0].image_profile.url)
            : null
        }
      />
      <Divider horizontal />
      <WorkExperience data={experiences} />
      <Skills techSkills={techSkills} proSkills={proSkills} />
      <Projects data={projects} />
      <InterestAndLanguage />
      <Educations />
      <Divider horizontal />
      <Footer />
    </div>
  );
};

export default OnlineResume;
