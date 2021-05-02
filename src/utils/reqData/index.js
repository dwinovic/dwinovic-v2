export const reqDataHostName = (url) => {
  return `${process.env.HOSTNAME}${url}`;
};

export const fetchingData = async (url) => {
  const res = await fetch(`${process.env.HOSTNAME}${url}`);
  const data = await res.json();

  return data;
};
