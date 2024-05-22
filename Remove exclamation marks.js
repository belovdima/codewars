function removeExclamationMarks(s) {
    let removechart = /[!]/g;
    s = s.replace(removechart, "");
    return s;
}
