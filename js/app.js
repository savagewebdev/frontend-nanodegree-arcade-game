// Enemies our player must avoid
class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/enemy-bug.png';
    }
    
    update(dt) {
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor(x, y) {
        this.x = x; // Horizontal
        this.y = y; // Vertical
        this.sprite = 'images/char-boy.png'
    }
    
    update(dt) {
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    
    handleInput() {
    }
    
}

var allEnemies = [];
let rowPos = 60; // Vertical

for (let num = 1; num <= 3; num++){
    let Feind = new Enemy(5, rowPos)
    allEnemies.push(Feind);
    rowPos += 85;
}

//const Spieler = new Player;

// Place the player object in a variable called player
const player = new Player(203, 425);
Feind.render();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


