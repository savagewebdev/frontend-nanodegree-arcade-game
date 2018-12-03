// Enemies our player must avoid
class Enemy {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/enemy-bug.png';
        this.speed = speed;
    }
    
    update(dt) {
        this.x = this.x + this.speed * dt;
        if(this.x > 505){this.x = 0;} // If the Enemy scrolls off-screen, then reset position.
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
    
    handleInput(allowedKeys) {
        let z = allowedKeys;
        
        if (z === 'left') { // Left
            this.x + 85;
        }
        
        if (z === 'up') { // Up
            this.y + 85;
        }
        
        if (z === 'right') { // Right
            this.x - 85;
        }
        
        if (z === 'right') { // Down
            this.y - 85;
        }
    }
}


var allEnemies = [];
let rowPos = 60; // Vertical
let speed = 300; // Starting speed test

for (let num = 1; num <= 3; num++){
    let Feind = new Enemy(5, rowPos, speed)
    allEnemies.push(Feind);
    rowPos += 85;
    speed -= 50;
}

//const Spieler = new Player;

// Place the player object in a variable called player
const player = new Player(203, 425);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


