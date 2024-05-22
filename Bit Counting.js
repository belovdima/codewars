"use strict";

var countBits = function (n) {
    // Program Me
    let dvoich = n.toString(2);
    dvoich = String(dvoich);

    let i = 0;
    let s = 0;

    while (i < dvoich.length) {
        s += +dvoich[i];
        i++;
    }
    return s;
};
