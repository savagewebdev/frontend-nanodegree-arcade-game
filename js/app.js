// Enemies our player must avoid
class Enemy {
    constructor(x, y, speed, spriteWidth, spriteHeight) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/enemy-bug.png';
        this.speed = speed;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.bound = spriteWidth * spriteHeight;
        
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
    constructor(x, y, spriteWidth, spriteHeight) {
        this.x = x; // Horizontal
        this.y = y; // Vertical
        this.sprite = 'images/char-boy.png'
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.bound = spriteWidth * spriteHeight
    }
    
    update(dt) {
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    
    handleInput(allowedKeys) {
        let z = allowedKeys;
        
        if (z === 'right') { // Right
            this.x += 101;
        }
        
        if (z === 'down') { // Down
            this.y += 83;
        }
        
        if (z === 'left') { // Left
            this.x -= 101;
        }
        
        if (z === 'up') { // Up
            this.y -= 83;
        }
    }
}


var allEnemies = [];
let rowPos = 60; // Vertical
let speed = 300; // Starting speed test

for (let num = 1; num <= 3; num++){
    let Feind = new Enemy(5, rowPos, speed, 98, 66) // 98 x-horizontal 66 y-vertical
    allEnemies.push(Feind);
    rowPos += 83;
    speed -= 50;
}

//const Spieler = new Player;

// Place the player object in a variable called player
const player = new Player(205, 405, 68, 75); //68 x-horizontal 75-vertical



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


