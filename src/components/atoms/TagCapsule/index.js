import React from 'react';

const TagCapsule = ({ textTag, disable }) => {
  const className = {
    default: {
      button: 'capsule-default',
      text: 'text-default',
    },
    disable: {
      button: 'capsule-disable',
      text: 'text-disable',
    },
  };

  return (
    <div
      className={`flex self-start ${
        disable ? `${className.disable.button}` : `${className.default.button}`
      }`}
    >
      <p
        className={` ${
          disable ? `${className.disable.text}` : `${className.default.text}`
        }`}
      >
        {textTag}
      </p>
    </div>
  );
};

export default TagCapsule;

{
  /* <div className="py-0.5 px-1.5 bg-yellow-200 rounded-lg inline-block ">
<a className="text-black-400 font-poppins text-sm">{textTag}</a>
</div> */
}
