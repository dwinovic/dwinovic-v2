import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ as, text, addClass }) => {
  const headClass = `font-poppins font-bold text-black-500  ${addClass}`;

  const Head1 = () => {
    return <h1 className={`${headClass} text-5xl my-2`}>{text}</h1>;
  };
  const Head2 = () => {
    return <h2 className={`${headClass} text-4xl`}>{text}</h2>;
  };
  const Head3 = () => {
    return <h3 className={`${headClass} text-3xl my-2`}>{text}</h3>;
  };
  const Head4 = () => {
    return <h4 className={`${headClass} text-2xl`}>{text}</h4>;
  };
  const Head5 = () => {
    return <h5 className={`${headClass} text-xl`}>{text}</h5>;
  };
  const Head6 = () => {
    return <h6 className={`${headClass} text-lg`}>{text}</h6>;
  };

  const ChooseHeading = () => {
    if (as) {
      if (as === 1) {
        return <Head1 />;
      }
      if (as === 2) {
        return <Head2 />;
      }
      if (as === 3) {
        return <Head3 />;
      }
      if (as === 4) {
        return <Head4 />;
      }
      if (as === 5) {
        return <Head5 />;
      }
      if (as === 6) {
        return <Head6 />;
      }
    } else {
      return null;
    }
  };

  return <ChooseHeading />;
};

export default Heading;

Heading.propTypes = {
  as: PropTypes.number,
  text: PropTypes.string,
  addClass: PropTypes.string,
};
