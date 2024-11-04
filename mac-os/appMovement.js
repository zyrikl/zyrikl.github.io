var nameApp = document.getElementById("nameApp");
var texteditium = document.getElementById("textedithide");
var teIcon = document.getElementById("textEditIcon");
var finder = document.getElementById("finder");
finder.addEventListener("mousedown", function(e) {
    var w34huf8 = e.value;
    w34huf8 = 0;
    nameApp.innerHTML = "Finder";
});
function hideTextedit() {
    var textedittab = document.getElementById("textedit");
    textedittab.classList.toggle("changedHide");
    // alert(tab.className);
    /* if (tab.className === "changedHide") {
        tab.classList.toggle("hide");
    } */
}
texteditium.addEventListener("mousedown", function(e) {
    var w34huf9 = e.value;
    w34huf9 = 0;
    hideTextedit();
});
// for TextEdit
teIcon.addEventListener("mousedown", function(e) {
    var w34huf0 = e.value;
    w34huf0 = 0;
    hideTextedit();
    nameApp.innerHTML = "TextEdit";
});
var chromium = document.getElementById("chromehide");
var chromeIcon = document.getElementById("googleIcon");
function hideChrome() {
    var tab = document.getElementById("tab");
    tab.classList.toggle("changedHide");
    // alert(tab.className);
    /* if (tab.className === "changedHide") {
        tab.classList.toggle("hide");
    } */
}
chromium.addEventListener("mousedown", function(e) {
    hideChrome();
});
chromeIcon.addEventListener("mousedown", function(e) {
    hideChrome();
    nameApp.innerHTML = "Chrome";
});
dragElement(document.getElementById("tab"), document.getElementById("safeguard"));
// dragElement(document.getElementById("textedit"));
    function dragElement(elmnt, pull) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (pull) {
            // if present, the header is where you move the DIV from:
            pull.onmousedown = dragMouseDown;
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
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop + e.clientY)/2.6 + "px";
            elmnt.style.left = (elmnt.offsetLeft + e.clientX)/2.6 + "px";
        }
        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
            // pos3 = pos1 - e.clientX;
            // pos4 = pos2 - e.clientY; // was in elementDrag
            pos1 = pos3;
            pos2 = pos4;
        }
    }
dragElement(document.getElementById("textedit"), document.getElementById("safeguard1"));
dragElement(document.getElementById("asdf"), document.getElemenntById("wutt"));
var webpage1 = document.getElementById("webpageUp");
var webpage2 = document.getElementById("webpageUp2");
function changeTabs() {
    webpage1.classList.toggle("grapes");
    webpage2.classList.toggle("apples");
}
document.addEventListener("dblclick", function(e) {
    var w34huf7 = e.value;
    w34huf7 = 0;
    nameApp.innerHTML = "Finder";
});
var asdfd = document.getElementById("asdfd");
var eee = document.getElementById("eee");
function hideSys() {
    var asdf = document.getElementById("asdf");
    asdf.classList.toggle("changedHide");
}
eee.addEventListener("click", function(e) {
    var w34hu2f = e.value;
    w34hu2f = 0;
    hideSys();
});
asdfd.addEventListener("mousedown", function(e) {
    var w34huf3 = e.value;
    w34huf3 = 0;
    hideSys();
    nameApp.innerHTML = "System Preferences";
});
greenButton = document.getElementById("greenButtonChrome");
greenButton.addEventListener("mousedown", function(e) {
    var w34huf = e.value;
    w34huf = 0;
    fullScreen();
});
function fullScreen() {
    tab.style.width = "1000px";
    tab.style.width = "600px;";
}