// Created by Charles Wang

const safariinput = document.getElementById("safari_input");
const findertext = document.getElementById("finder_selection");
const iframe = document.getElementById("safari_iframe");
const minimizesafaributton = document.getElementById("minimize_safari");

const safariicon = document.getElementById("safari_icon");
const safariwindow = document.getElementById("safari_window");
const safariclosebutton = document.getElementById("close_safari");

function restartIframe() {
    iframe.src = "https://www.google.com/?igu=1";
    safariinput.value = "";
    /* safariwindow.style.top = "0px";
    safariwindow.style.left = "0px";
    safariwindow.style.width = "70%";
    safariwindow.style.height = "500px"; */
}

function showWindow(icon, iconwindow, text) {
    icon.addEventListener("mousedown", function () {
        iconwindow.classList.toggle("show");
        findertext.innerHTML = text;
        if (icon == safariclosebutton) {
            restartIframe();
        }
    });
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "_header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "_header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    if (safariwindow.width == "100%") {
        elmnt.style.top = "0px";
        elmnt.style.left = "0px";
    } else {
        if ((elmnt.offsetTop - pos2) <= 30) {
            elmnt.style.top = "30px";
        }
        if ((elmnt.offsetTop - pos2) >= (window.screen.height-(window.screen.height*0.0751+598))) {
            elmnt.style.top = window.screen.height-(window.screen.height*0.0751+598)+"px";
        }
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

showWindow(minimizesafaributton, safariwindow, "Safari");
showWindow(safariicon, safariwindow, "Safari");
showWindow(safariclosebutton, safariwindow, "Safari");

document.addEventListener("dblclick", function () {
    findertext.innerHTML = "Finder";
});

function startTime() {
    const timeelement = document.getElementById("time");
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
    timeelement.innerHTML = weekday+" "+month+" "+day+"&nbsp;&nbsp;"+hour+":"+minutes+" "+apm;
    setTimeout(startTime, 1000);
}

function showBattery() {
    const batteryText = document.getElementById("battery_icon");
    navigator.getBattery().then (a => {
        var batterylevel = Math.round(a.level*100);
        let t = batterylevel + "%";
        batteryText.innerHTML = t;
    })
    setTimeout(showBattery, 2000);
}

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (err) {
        return false;
    }
}

safariinput.addEventListener("keydown", function (Event) {

    if (Event.key == "Enter") {
        var inputvalue = safariinput.value;
        var urlchecker = isValidUrl(inputvalue);
        if (urlchecker == true) {
            iframe.src = safariinput.value;
        }
        if (urlchecker == false) {
            iframe.src = "https://www.google.com/search?igu=1&q="+inputvalue+"&safe=active&ssui=on&surl=1";
            safariinput.value = "https://www.google.com/search?igu=1&q="+inputvalue+"&safe=active&ssui=on&surl=1";
        }
        iframe.src = safariinput.value;
    }
});

const maximizesafari = document.getElementById("maximize_safari");
var minormax = 0;

maximizesafari.addEventListener("mousedown", function () {
    minormax += 1
    safariwindow.classList.toggle("fullscreen");
    if (minormax % 2 == 1) {
        iframe.style.height = window.screen.height-(128+window.screen.height*0.0751)+"px";
    } else {
        iframe.style.height = "500px";
    }
});

const iframeSrcUrl = "";
function iframeReload() {
    iframeSrcUrl = iframe.src;
    safariinput.value = iframeSrcUrl;
}

/* const safariback = document.getElementById("safari_back");
safariback.addEventListener("mousedown", function () {
    iframe.src = "https://google.com/?igu=1";
}); */

dragElement(document.getElementById("safari_window"));

startTime();
showBattery();