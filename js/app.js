// Enemies our player must avoid
class Enemy {
    constructor(sprite = 'images/enemy-bug.png', enemies = 3) {
        this.sprite = sprite;
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
    constructor(x, y, sprite = 'images/char-boy.png') {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
    }
    
    update(dt) {
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    
    handleInput() {
    }
    
}

// Now instantiate your objects.
const Feind = new Enemy();

//const Spieler = new Player;
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
allEnemies.push(Feind);


// Place the player object in a variable called player
const player = new Player();
Feind.render(20, 30);

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


