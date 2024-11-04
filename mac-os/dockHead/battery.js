var bt = document.getElementById("battery");
function batterysadf() {
    navigator.getBattery().then (a => {
        var battlevel = Math.round(a.level*100);
        let t = battlevel + "%";
        bt.innerHTML = t;
    })
    setTimeout(batterysadf,1000);
    // updates every one second
}
batterysadf();