let rawData = "Hello World";
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
function mytoast(rawData) {
    var toastHTML = '<span>' + rawData + '</span><button class="btn-flat toast-action">Undo</button>';
    M.toast({ html: toastHTML });
}
function alarm() {
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);
    myClock.innerText = hr + " : " + min + " : " + sec;

    if (hr == 17 && min == 58 && sec == 30) {
        mytoast(rawData);
    }
    setTimeout(alarm, 1000);
}