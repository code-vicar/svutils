module.exports = function isNullOrUndefined(val) {
    'use strict';

    return (typeof val === 'undefined' || val === null);
};
