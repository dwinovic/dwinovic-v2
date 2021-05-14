import React, { useEffect, useState } from 'react';
import { Heading, Paragraph } from '../../atoms';
import PropTypes from 'prop-types';
import Zoom from 'react-reveal/Zoom';

function CardSkill({ icon, title, desc }) {
  const [iconLogo, seticonLogo] = useState('/gif/loading.gif');

  useEffect(() => {
    icon && seticonLogo(icon);
  }, []);

  return (
    <Zoom cascade>
      <div className="skill-item">
        <img src={iconLogo} className="logo-skill" />
        <Heading text={title} as={5} addClass="my-2" />
        <Paragraph variant={14} addClass="skill-paragraph">
          {desc}
        </Paragraph>
      </div>
    </Zoom>
  );
}

export default CardSkill;

CardSkill.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};
