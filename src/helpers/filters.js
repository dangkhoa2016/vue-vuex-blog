import Vue from "vue"
import moment from "moment";
const regNumber = /^\d+$/;

var formatDate = function (value, format) {
    if (!value) return '';
    value = new Date(regNumber.test(value) ? parseFloat(value) : value);
    return moment(value).format(format)
};

Vue.filter('formatShortDate', function (value) {
    return formatDate(value, 'MMM DD YYYY')
});

Vue.filter('formatDate', formatDate);
