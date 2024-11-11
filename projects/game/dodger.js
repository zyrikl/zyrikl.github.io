var programCode = function(processingInstance) {
    with (processingInstance) {
        size(400, 400); 
        frameRate(60);
        fill(255, 255, 255);
        rect(0, 0, 400, 400);
        fill(255, 0, 0);
        text("Play", 0, 0);
    }
};
var canvas = document.getElementById("canvas2");
var processingInstance = new Processing(canvas2, programCode); 