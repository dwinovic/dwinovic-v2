import React, { useEffect, useState } from 'react';

const index = () => {
  const [data, setData] = useState({});
  const [preview, setPreview] = useState(false);

  const dataImage = {
    url: '/image/coverskill.jpg',
    title: 'Skill',
    date: '20 09 2021',
  };

  useEffect(() => {
    setData(dataImage);
  }, []);

  const ViewWide = () => {
    return (
      <div className="absolute inset-0 h-[80vh] w-[80vw]">
        <img
          src={data.url}
          className="rounded-tr-xl rounded-tl-xl w-full h-64 object-cover"
        />
      </div>
    );
  };

  const onPriview = () => {
    setPreview(true);
  };

  return (
    <>
      {preview ? <ViewWide /> : null}
      <div className="container w-full py-4 grid grid-cols-3 gap-4">
        <button onClick={onPriview}>
          <div className="bg-yellow-100 rounded-xl">
            <img
              src={data.url}
              className="rounded-tr-xl rounded-tl-xl w-full h-64 object-cover"
            />
            <p className="p-4 font-poppins text-lg text-black-500 tracking-wide font-semibold">
              {data.title}
            </p>
          </div>
        </button>
        <div className="bg-yellow-100 rounded-xl">
          <img
            src={data.url}
            className="rounded-tr-xl rounded-tl-xl w-full h-64 object-cover"
          />
          <p className="p-4 font-poppins text-lg text-black-500 tracking-wide font-semibold">
            {data.title}
          </p>
        </div>
        <div className="bg-yellow-100 rounded-xl">
          <img
            src={data.url}
            className="rounded-tr-xl rounded-tl-xl w-full h-64 object-cover"
          />
          <p className="p-4 font-poppins text-lg text-black-500 tracking-wide font-semibold">
            {data.title}
          </p>
        </div>
      </div>
    </>
  );
};

export default index;
