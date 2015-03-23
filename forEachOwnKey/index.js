(function () {
    'use strict';

    var isNullOrUndefined = require('../isNullOrUndefined');

    module.exports = function forEachOwnKey(it, cb) {

        if (isNullOrUndefined(it)) {
            return;
        }

        var i, len, keys = Object.keys(it);

        for (i = 0, len = keys.length; i < len; i++) {
            if (Object.hasOwnProperty.call(it, keys[i])) {
                if (cb(keys[i]) === false) {
                    return;
                }
            }
        }
    };

}());
