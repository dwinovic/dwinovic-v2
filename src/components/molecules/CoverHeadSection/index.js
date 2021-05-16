import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const CoverHeadSection = ({ cover, title }) => {
  const [header, setHeader] = useState('/gif/loading.gif');

  useEffect(() => {
    setHeader(cover);
  }, []);

  return (
    <div className={`cover-head-section ${!cover ? 'bg-black-400 py-16' : ''}`}>
      {/* <Heading text={title} as={1} color="text-white uppercase" /> */}
      {cover && <img src={header} className="cover" />}
    </div>
  );
};

export default CoverHeadSection;

CoverHeadSection.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
};
