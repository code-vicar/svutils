module.exports = function (arg) {
    'use strict';

    return Object.prototype.toString.call(arg) === '[object Array]';
};
