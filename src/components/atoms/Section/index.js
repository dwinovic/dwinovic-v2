import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ addClass, children, id }) => {
  return (
    <section id={id} className={`my-14 ${addClass}`}>
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  addClass: PropTypes.string,
  children: PropTypes.element,
  id: PropTypes.string,
};
