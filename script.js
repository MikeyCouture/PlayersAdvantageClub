const fallsviewApp = {};

fallsviewApp.init = function(){
    
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a',
        66: 'b'
    };

    let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
    let konamiCodePosition = 0;
    let audio;

    // keydown event listener
    document.addEventListener('keydown', function (e) {
        // value of the key code from the key map
        var key = allowedKeys[e.keyCode];
        // value of the required key from the konami code
        var requiredKey = konamiCode[konamiCodePosition];

        if (key == requiredKey) {
            konamiCodePosition++;

            if (konamiCodePosition == konamiCode.length) {
                pitbullSong();
                konamiCodePosition = 0;
            }

        } else {
            konamiCodePosition = 0;
        }
    });

    function pitbullSong() {
        let audio = new Audio();
        audio.src = "audio/PitbullSuperstar.mp3";
        audio.play();
    }

}

fallsviewApp.init();