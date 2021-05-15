import Axios from 'axios';

export const reqDataHostName = (url) => {
  return `${process.env.HOSTNAME}${url}`;
};

export const fetchingData = async (url) => {
  const data = await Axios.get(`${process.env.HOSTNAME}${url}`)
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

export const postData = async (url, post) => {
  return await Axios.post(`${process.env.HOSTNAME}${url}`, post);
};
