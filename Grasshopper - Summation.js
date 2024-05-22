"use strict";

var summation = function (num) {
    // Code here
    let sum = 0;
    while (num > 0) {
        sum += num;
        num--;
    }
    return sum;
};
