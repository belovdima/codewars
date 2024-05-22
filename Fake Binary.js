function fakeBin(x) {
    let belowfive = /[01234]/g;
    x = x.replace(belowfive, "0");
    let abovefive = /[56789]/g;
    x = x.replace(abovefive, "1");
    return x;
}
