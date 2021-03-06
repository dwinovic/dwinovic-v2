import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ as, text, addClass, color }) => {
  const headClass = `font-poppins font-bold ${
    color ? `${color}` : 'text-black-500'
  }  ${addClass}`;

  const Head1 = () => {
    return (
      <h1
        className={`${headClass} ${addClass} lg:text-5xl md:text-3xl sm:text-3xl iphone:text-3xl android:text-3xl my-2`}
      >
        {text}
      </h1>
    );
  };
  const Head2 = () => {
    return (
      <h2
        className={`${headClass} ${addClass} 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl iphone:text-xl android:text-lg`}
      >
        {text}
      </h2>
    );
  };
  const Head3 = () => {
    return (
      <h3
        className={`${headClass} ${addClass} 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl  sm:text-xl iphone:text-xl android:text-lg my-2`}
      >
        {text}
      </h3>
    );
  };
  const Head4 = () => {
    return (
      <h4
        className={`${headClass} ${addClass} 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl  sm:text-xl iphone:text-lg android:text-lg`}
      >
        {text}
      </h4>
    );
  };
  const Head5 = () => {
    return (
      <h5
        className={`${headClass} ${addClass} 2xl:text-xl xl:text-xl lg:text-xl md:text-lg  sm:text-lg iphone:text-lg android:text-base`}
      >
        {text}
      </h5>
    );
  };
  const Head6 = () => {
    return (
      <h6
        className={`${headClass} ${addClass} 2xl:text-lg xl:text-lg lg:text-lg md:text-md  sm:text-md iphone:text-md android:text-base`}
      >
        {text}
      </h6>
    );
  };

  const ChooseHeading = () => {
    switch (as) {
      case 1:
        return <Head1 />;
      case 2:
        return <Head2 />;
      case 3:
        return <Head3 />;
      case 4:
        return <Head4 />;
      case 5:
        return <Head5 />;
      case 6:
        return <Head6 />;
      default:
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
