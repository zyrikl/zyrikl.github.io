var openGame = document.getElementById("game");
var game = document.getElementById("openGameResult");
openGame.addEventListener("mousedown", function(e) {
    game.classList.toggle("open");
});