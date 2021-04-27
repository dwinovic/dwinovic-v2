import React from 'react';

const TagCapsule = ({ textTag, disable }) => {
  const className = {
    default: {
      button: `py-0.5 px-1.5 bg-yellow-200 rounded-lg inline-block`,
      text: `text-black-400 font-poppins text-sm`,
    },
    disable: {
      button: `py-0.5 px-1.5 bg-black-300 rounded-lg inline-block`,
      text: `text-white font-poppins text-sm`,
    },
  };

  return (
    <div
      className={`flex self-start ${
        disable ? `${className.disable.button}` : `${className.default.button}`
      }`}
    >
      <a
        className={` ${
          disable ? `${className.disable.text}` : `${className.default.text}`
        }`}
      >
        {textTag}
      </a>
    </div>
  );
};

export default TagCapsule;

{
  /* <div className="py-0.5 px-1.5 bg-yellow-200 rounded-lg inline-block ">
<a className="text-black-400 font-poppins text-sm">{textTag}</a>
</div> */
}
