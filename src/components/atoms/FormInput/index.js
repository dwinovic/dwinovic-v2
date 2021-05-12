import React from 'react';

const index = ({ label, type, name, id, placeholder, ...resProps }) => {
  const FormType = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            type={type}
            name={name}
            placeholder={placeholder}
            className="py-2 px-3 border-2 border-black-300 rounded-md font-poppins text-lg text-black-500 hover:  w-full h-[340px]"
            {...resProps}
          ></textarea>
        );
      case 'submit':
        return (
          <input
            type={type}
            className="py-2 px-3 border-2 border-black-300 rounded-md font-poppins text-black-500 bg-black-100 hover:bg-black-200 w-full"
          />
        );
      default:
        return (
          <input
            type={type}
            // id={id}
            name={name}
            placeholder={placeholder}
            className="py-2 px-3 border-2 border-black-300 rounded-md font-poppins text-black-500 hover: w-full"
            {...resProps}
          />
        );
    }
  };
  return (
    <div>
      <FormType />
    </div>
  );
};

export default index;
