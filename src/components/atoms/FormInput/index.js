import React from 'react';

const index = ({
  label,
  type,
  name,
  id,
  placeholder,
  typeForm,
  ...resProps
}) => {
  const FormType = () => {
    switch (typeForm) {
      case 'textarea':
        return (
          <textarea
            type={typeForm}
            id={id}
            name={name}
            placeholder={placeholder}
            {...resProps}
            className="py-2 px-3 border-2 border-black-300 rounded-md font-poppins text-lg text-black-500 hover:  w-full h-[340px]"
          ></textarea>
        );
      default:
        return (
          <input
            type={typeForm}
            id={id}
            name={name}
            {...resProps}
            placeholder={placeholder}
            className="py-2 px-3 border-2 border-black-300 rounded-md font-poppins text-black-500 hover: w-full"
          />
        );
    }
  };
  return (
    <div>
      <label for={name} className="hidden">
        {label}
      </label>
      <FormType />
    </div>
  );
};

export default index;
