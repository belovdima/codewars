function humanReadable(seconds) {
    let s = seconds;
    let m = 0;
    let h = 0;
    if (s > 59) {
        m = Math.floor(s / 60);
        s = s - m * 60;
        if (m > 59) {
            h = Math.floor(m / 60);
            m = m - h * 60;
        }
    }
    let ss = s.toString().padStart(2, "0");
    let mm = m.toString().padStart(2, "0");
    let hh = h.toString().padStart(2, "0");

    return hh + ":" + mm + ":" + ss;
}
