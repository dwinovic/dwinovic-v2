import React from 'react';
import { Heading, Paragraph } from '../../atoms';

function CardSkill() {
  return (
    <div className="box-border h-auto w-auto p-4  rounded-lg shadow-md ">
      <img src="/icons/ic-html.svg" />
      <Heading text="HTML5" as={5} addClass="my-2" />
      <Paragraph
        text="List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."
        variant={14}
        addClass="tracking-wide text-justify"
      />
    </div>
  );
}

export default CardSkill;
