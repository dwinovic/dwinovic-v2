import React, { useEffect, useState } from 'react';
import { Heading, Paragraph } from '../../atoms';
import PropTypes from 'prop-types';

function CardSkill({ icon, title, desc }) {
  const [iconLogo, seticonLogo] = useState('/icons/ic-html.svg');

  useEffect(() => {
    icon && seticonLogo(icon);
  }, []);

  return (
    <div className="skill-item">
      <img src={iconLogo} className="logo-skill" />
      <Heading text={title} as={5} addClass="my-2" />
      <Paragraph variant={14} addClass="skill-paragraph">
        {desc}
      </Paragraph>
    </div>
  );
}

export default CardSkill;

CardSkill.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};
