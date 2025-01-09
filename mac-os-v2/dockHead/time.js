
/* var onefe = getBattery();
alert(onefe); */
function startT() {
    const dates = new Date();
    var weekday = dates.getDay();
    var month = dates.getUTCMonth();
    var day = dates.getUTCDate();
    let hour = dates.getHours();
    var apm;
    if ((hour-12) >= 0) {
        apm = "PM";
    } else {
        apm = "AM";
    }
    if (hour == 12) {hour = 12} else {hour = hour % 12;}
    let minutes = dates.getMinutes();
    function addZero(i) {
        if (i < 10) {
            i = "0"+i;
            return i;
        } else {
            return i;
        }
    }
    minutes = addZero(minutes);
    hour = addZero(hour);
    var des = document.getElementById("hdifj");
    if (month == 0) {month="Jan"};
    if (month == 1) {month="Feb"};
    if (month == 2) {month="Mar"};
    if (month == 3) {month="Apr"};
    if (month == 4) {month="May"};
    if (month == 5) {month="Jun"};
    if (month == 6) {month="Jul"};
    if (month == 7) {month="Aug"};
    if (month == 8) {month="Sep"};
    if (month == 9) {month="Oct"};
    if (month == 10) {month="Nov"};
    if (month == 11) {month="Dec"};
    if (weekday == 0) {weekday="Sun"};
    if (weekday == 1) {weekday="Mon"};
    if (weekday == 2) {weekday="Tue"};
    if (weekday == 3) {weekday="Wed"};
    if (weekday == 4) {weekday="Thu"};
    if (weekday == 5) {weekday="Fri"};
    if (weekday == 6) {weekday="Sat"};
    if (weekday == 7) {weekday="Sun"};
    des.innerHTML = weekday+" "+month+" "+day+"&emsp;"+hour+":"+minutes+" "+apm;
    setTimeout(startT, 1000);
}
startT();
