import React from 'react';
import { Heading, HeadingSection, Paragraph } from '../../atoms';

const index = () => {
  return (
    <section>
      <HeadingSection text="What I Do" />
      <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus quis ornare adipiscing ac cursus maecenas. Mauris habitasse non mi consequat. Laoreet feugiat nisi ac quam eleifend malesuada turpis consectetur. Aliquet ut aenean tristique purus suspendisse donec ut." />
      <div>
        <div>
          {/* Icon */}
          <Heading text="HTML5" as={5} />
          <Paragraph
            text="List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor."
            variant={12}
          />
        </div>
      </div>
    </section>
  );
};

export default index;
