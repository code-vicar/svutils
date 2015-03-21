module.exports = function getRandomInt(min, max) {
    'use strict';

    return Math.floor(Math.random() * (max - min)) + min;
};
