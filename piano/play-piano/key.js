var A2, B2, C2, D2, E2, F2, G2, A3, B3, C3, D3, E3, F3, G3;
var A4, B4, C4, D4, E4, F4, G4, A5, BB5, B5, C5, DB5, D5, EB5, E5, F5, GB5, G5, AB5;
var A6, B6, C6, D6, E6, F6, G6, A7, B7, C7, D7, E7, F7, G7;
A4 = 440;B4 = 493.89;C4 = 523.25;D4 = 587.33;E4 = 659.25;F4 = 698.45;G4 = 775.08;
BB4 = 466.16;DB4 = 554.37;EB4 = 622.25;GB4 = 739.99;AB4 = 415.30;
var keyBB3 = document.getElementById("BB3");
A5 = A4*2;B5 = B4*2;C5 = C4*2;D5 = D4*2;E5 = E4*2;F5 = F4*2;G5 = G4*2;
BB5 = BB4*2;DB5 = DB4*2;EB5 = EB4*2;GB5 = GB4*2;AB5 = AB4*2;
A3 = A4/2;B3 = B4/2;C3 = C4/2;D3 = D4/2;E3 = E4/2;F3 = F4/2;G3 = G4/2;
BB3 = BB4/2;DB3 = DB4/2;EB3 = EB4/2;GB3 = GB4/2;AB3 = AB4/2;
function note(freq, duration, vol) {
    var context = new(window.AudioContext || window.webkitAudioContext);
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    gain.gain.setValueAtTime(0, context.currentTime);
    gain.gain.linearRampToValueAtTime(1, context.currentTime + 0.002);
    oscillator.connect(gain);
    oscillator.frequency.value = freq;
    oscillator.type = "sine";
    gain.connect(context.destination);
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + duration * .001);
    oscillator.onended = () => context.close();
}
/* function holdingKeyBB3() {
    var mouseDown = false;
    var startHold;
    var endHold;
    var timeCache;
    keyBB3.addEventListener('mousedown', function() {
        mouseDown = true;
            setTimeout(function() {
                if(mouseDown = true) {
                    start = new Date();
                }
            }, 500);
        });
    keyBB3.addEventListener('mouseup', function() {
        mouseDown = false;
        endHold = new Date();
        timeCache = (endHold - startHold)
        note(BB3, timeCache, 40);
    });
}
holdingKeyBB3(); */