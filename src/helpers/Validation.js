export default {
  email(val){
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(val);
  },
  number(val){
    let re = /^\d+$/;
    return re.test(val);
  },
  string(val){
    let re = /^[A-Za-z ]+$/;
    return re.test(val);
  },
  creditCardLd(val){
		return val.substr(15,4);
	},
  creditCardMonth(val){
    return val.substr(0,2);
  },
  creditCardYear(val){
    return val.substr(3,2);
  },
  creditCardYearXendit(val){
    return val.substr(3,4);
  },
  creditCardNumber(val){
    return val.replace(/\s/g,'');
  },
  phoneNumber(val) {
    let zeros = val.match(/^[0]+/g);
    return val.replace(zeros, '');
  },
}
