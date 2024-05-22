function digitize(n) {
    //code here
    let arr = [];
    for (let i of n.toString()) {
        arr.push(Number(i));
    }
    return arr.reverse();
}
