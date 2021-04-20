import React from 'react';

const Section = ({ addClass, children }) => {
  return <section className={`my-14 ${addClass}`}>{children}</section>;
};

export default Section;
