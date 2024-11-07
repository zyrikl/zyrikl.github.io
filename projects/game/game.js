var programCode = function(processingInstance) {
    with (processingInstance) {
        size(400, 400); 
        frameRate(50);
        var x, y, a, b, c, d, player, obstacles, points, pointText, speed;
        a = mouseX - 20;
        b = a + 40;
        c = mouseY;
        d = c + 40;
        x = random(0, 400);
        y = 0;
        speed = 4;
        points = 0;
        noStroke();
        background(0, 0, 0);
        player = function() {
            fill(0, 0, 0);
            rect(0, 270, 400, 130);
            fill(255, 0, 0);
            quad(a, 270, b, 270, b, 310, a, 310);
            a = mouseX - 20;
            b = a + 40;
            c = mouseY + 20;
            d = c + 40;
        };
        obstacles = function() {
            x = x;
            fill(0, 0, 0);
            rect(x, 0, 10, 400);
            fill(x, y, x+y);
            rect(x, y, 10, 40);
            if (y >= 350) {
                x = random(0, 400);
            }
            y = (y + speed) % 370;
            if (x >= a && x <= b && y >= 270) {
                points += 1;
            }
        };
        pointText = function() {
            textSize(20);
            fill(0, 0, 0);
            rect(0, 0, 400, 30);
            fill(255, 0, 0);
            var font3 = createFont("monospace");
            textFont(font3);
            text("Points: " + points, 100, 25);
        };
        var playButton = function() {
            fill(0, 0, 0);
            rect(0, 0, 400, 400);
            fill(255, 0, 0);
            rect(100, 100, 200, 100);
            fill(0, 0, 0);
            textSize(50);
            var font1 = createFont("fantasy");
            textFont(font1);
            text("Play!", 152, 165);
            fill(255, 0, 0);
            textSize(17);
            text("Try to get the items.", 127, 250);
            textSize(45);
            var font2 = createFont("serif");
            textFont(font2);
            text("Poindexter's Game", 32, 340);
        };
        var closeButton = function() {
            fill(255, 255, 255);
            textSize(20);
            text("X", 375, 25);
        };
        draw = function() {
            playButton();
        };
        mousePressed = function() {
            if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 200) {
            fill(0, 0, 0);
            rect(0, 0, 400, 400);
            draw = function() {
            obstacles();
            player();
            pointText();
            closeButton();
            if (points >= 1000) {
                speed = 6;
            }
            if (points >= 1700) {
                speed = 8;
            }
            if (points >= 3000) {
                speed = 10;
            }
            if (points >= 4000) {
                speed = 12;
            }
        };
        mouseClicked = function() {
            if (mouseX > 365 && mouseX < 395 && mouseY > 15 && mouseY < 35) {
                draw = function() {
                    playButton();
                };
            }
        };
        fill(0, 0, 0);
        rect(0, 0, 400, 400);
        }
        }
    }
};
var canvas = document.getElementById("canvas");
var processingInstance = new Processing(canvas, programCode); 
