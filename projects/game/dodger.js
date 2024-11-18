var programCodetwo = function(processingInstancetwo) {
    with (processingInstancetwo) {
        size(400, 400); 
        frameRate(60);
        fill(255, 255, 255);
        rect(0, 0, 400, 400);
        fill(255, 0, 0);
        text("Play", 0, 0);
    }
};
var canvastwo = document.getElementById("canvastwo");
var processingInstancetwo = new Processing(canvastwo, programCodetwo); 