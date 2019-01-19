import moment from 'moment';

export default  {
  dateFormat(date, format, formatDate) {
    if (formatDate) {
      return moment(date).format(format);
    } else if(date) {
      return moment(date * 1000).format(format);
    } else {
      return moment().format(format);
    }
  },

  dateFromNow(date) {
    let remaining = 'ends ';

    if (date > 60000) {
      remaining += moment(date).fromNow();
    } else {
      remaining += 'in ' + parseInt(date / 1000) + (date > 1000 ? ' seconds' : ' second');
    };

    return remaining;
  },

  getMonth(date) {
    return moment(date).month()
  }
};
