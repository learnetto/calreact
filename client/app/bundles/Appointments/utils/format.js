import moment from 'moment';

export const formatDate = function(d) {
  return(d ? moment(d).format('MMMM DD YYYY, h:mm:ss a') : '');
};
