export const reqDataHostName = (url) => {
  return `${process.env.HOSTNAME}${url}`;
};

export const fetchingData = async (url) => {
  const reqSkill = await fetch(`${process.env.HOSTNAME}${url}`);
  const skills = await reqSkill.json();

  return skills;
};
