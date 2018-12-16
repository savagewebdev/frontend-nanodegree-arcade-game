class Enemy {
    constructor(x, y, speed, width, height) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/enemy-bug.png';
        this.speed = speed;
        this.width = width;
        this.height = height;
    }
    
    update(dt) {
        this.x = this.x + this.speed * dt;
        if(this.x > 505){this.x = 0;} // 
    }
    
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class Player {
    constructor(x, y, width, height) {
        this.x = x; // Horizontal
        this.y = y; // Vertical
        this.sprite = 'images/char-boy.png'
        this.width = width;
        this.height = height;
    }
    
    update(dt) {
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    
    handleInput(allowedKeys) { 
        let z = allowedKeys;
        
        if (this.x < 407 && z === 'right') { // 
            this.x += 101;
        }
        
        if (this.y < 405 && z === 'down') { // 
            this.y += 83;
        }
        
        if (this.x > 3 && z === 'left') { // 
            this.x -= 101;
        }
        
        if (this.y > -10 && z === 'up') { // 
            this.y -= 83;
        }
    }
}

const allEnemies = [];
let rowPos = 60; 
let speed = 300; 
for (let num = 1; num <= 3; num++){
    let enemy = new Enemy(5, rowPos, speed, 90, 60) 
    rowPos += 83;
    speed -= 50;
    allEnemies.push(enemy);
}

const player = new Player(205, 405, 60, 70); 

document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

