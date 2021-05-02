import moment from 'moment';

export const setDateFull = (value) => {
  const string_date = value;
  const date = moment(string_date).format('DD MMMM YYYY, h:mm a');
  const day = moment(string_date).format('dddd');

  return `${day}, ${date}`;
};

export const setOnlyDate = (value) => {
  const string_date = value;
  const date = moment(string_date).format('DD MMMM YYYY');

  return `${date}`;
};

export const setMonthYear = (value) => {
  const string_date = value;
  const date = moment(string_date).format('MMMM YYYY');

  return `${date}`;
};
