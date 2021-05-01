import React, { useEffect, useState } from 'react';
import { Heading, Paragraph } from '../../atoms';
import PropTypes from 'prop-types';

function CardSkill({ icon, title, desc }) {
  const [iconLogo, seticonLogo] = useState('/icons/ic-html.svg');

  useEffect(() => {
    icon && seticonLogo(icon);
  }, []);

  return (
    <div className="box-border h-auto w-auto p-4  rounded-lg shadow-md ">
      <img
        src={iconLogo}
        className="2xl:w-[40px] xl:w-[40px] lg:w-[40px] md:w-[40px] sm:w-[36px] iphone:w-[32px] android:w-[32px]"
      />
      <Heading text={title} as={5} addClass="my-2" />
      <Paragraph variant={14} addClass="tracking-wide text-justify">
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
