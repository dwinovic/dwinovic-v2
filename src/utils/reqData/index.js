import Axios from 'axios';

export const reqDataHostName = (url) => {
  return `${process.env.HOSTNAME}${url}`;
};

export const fetchingData = async (url) => {
  const data = await Axios.get(`http://localhost:1337${url}`)
    .then((res) => {
      const content = res.data;
      return content;
    })
    .catch((err) => {
      const error = err.message;
      return error;
    });

  return data;
};
