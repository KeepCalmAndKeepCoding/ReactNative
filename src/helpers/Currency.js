import {
	DateHelper
} from '@helpers'

export default {
	currencyFormat(number, million, thousand) {
    number = parseInt(number);

		if (!number) {
			return null;
		};

    if (number >= 1000000) {
      number = (number / 1000000).toFixed(3);
			if (million !== null) {
				number += ' ' + million;
			} else {
				number += '';
			};
    };

		if (number >= 1000) {
      number /= 1000;
			if (thousand !== null) {
				number += ' ' + thousand;
			} else {
				number += '';
			};
    };

		if (number !== undefined && typeof number === 'string') {
			return number.replace('.',',');
		} else {
			return number;
		};
	},
};
