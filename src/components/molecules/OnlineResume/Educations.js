import React from 'react';
import { EducationList, Heading } from '../../atoms';

const Educations = () => {
  return (
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
  );
};

export default Educations;
