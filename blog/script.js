var game = function(processingInstance) {
    with(processingInstance) {
        size(400, 400);
        // This is frame rate adjuster
        frameRate(55);
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
        background(2555, 0, 0);
        player = function() {
            fill(0, 0, 0);
            rect(0, 270, 400, 400);
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
            // this will give it a change-color effect
            fill(x, y, 255);
            rect(x, y, 10, 40);
            if (y >= 350) {
                x = random(0, 400);
            }
            // don't delete the "%", it's the loop
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
            textSize(40);
            var font1 = createFont("Press Start 2P");
            textFont(font1);
            text("Play!", 107, 165);
            fill(255, 0, 0);
            textSize(15);
            text("Try to get the items.", 55, 250);
            textSize(45);
            var font2 = createFont("fantasy");
            textFont(font2);
            text("Poindexter's Game", 15, 340);
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
                    if (points >= 2500) {
                        speed = 8;
                    }
                    if (points >= 5000) {
                        speed = 10;
                    }
                    mouseClicked = function() {
                        if (mouseX > 365 && mouseX < 395 && mouseY > 15 && mouseY < 35) {
                            draw = function() {
                                playButton();
                            };
                        }
                    };
                };
                fill(0, 0, 0);
                rect(0, 0, 400, 400);
            }
        };
    }
};
var canvas = document.getElementById("canvas");
var processingInstance = new Processing(canvas, game)