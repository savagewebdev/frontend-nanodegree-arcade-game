// Enemies our player must avoid
class Enemy {
    constructor(sprite = 'images/enemy-bug.png') {
    this.sprite = sprite;
    }

    function update(dt) { 
        
    };

    function render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function() {
};

// Now instantiate your objects.
Enemy();
Player();
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
var feind = new Enemy();
allEnemies.push(feind);

// Place the player object in a variable called player
var player = new Player();


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


