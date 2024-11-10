var programCode = function(processingInstance) {
    with (processingInstance) {
        size(400, 400); 
        frameRate(60);
        rect(0, 0, 400, 400);
    }
};
var canvas = document.getElementById("canvas2");
var processingInstance = new Processing(canvas2, programCode); 