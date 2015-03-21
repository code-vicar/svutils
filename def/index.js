var isNullOrUndefined = require('../isNullOrUndefined');

module.exports = function def(val, _def) {
    'use strict';

    if (isNullOrUndefined(val)) {
        return _def;
    }
    return val;
};
