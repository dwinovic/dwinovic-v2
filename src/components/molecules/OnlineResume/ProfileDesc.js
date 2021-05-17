import React, { useEffect, useState } from 'react';
import { Text } from '../../atoms';
import PropTypes from 'prop-types';

const ProfileDesc = ({ profile, desc, alt }) => {
  const [image, setImage] = useState('/gif/loading.gif');
  useEffect(() => {
    setImage(profile);
  }, []);
  return (
    <div className="profile-desc">
      <img
        src={image}
        className="rounded-full 2xl:w-48 2xl:h-48 xl:w-44 xl:h-44 lg:w-40 lg:h-40 md:w-40 md:h-40 sm:w-[50%] sm:h-[50%]  iphone:w-[50%] iphone:h-[50%] android:w-[50%] android:h-[50%] mr-4"
        alt={alt}
      />
      <Text>{desc}</Text>
    </div>
  );
};

export default ProfileDesc;

ProfileDesc.propTypes = {
  profile: PropTypes.string,
  desc: PropTypes.string,
  alt: PropTypes.string,
};
