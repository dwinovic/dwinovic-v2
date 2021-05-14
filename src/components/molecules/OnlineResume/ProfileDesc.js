import React from 'react';
import { Text } from '../../atoms';
import PropTypes from 'prop-types';

const ProfileDesc = ({ profile, desc, alt }) => {
  return (
    <div className="profile-desc space justify-center items-center responsive">
      <img src={profile} className="avatar" alt={alt} />

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
