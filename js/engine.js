var Engine = (function(global) { // The Engine function is created using global as its parameter, which is in turn an object.


    var doc = global.document, // The doc variable is the document method of global.
        win = global.window, // The win variable is the window method of global. 
        canvas = doc.createElement('canvas'), // The canvas variable creates a canvas element over "doc" (global.document).
        ctx = canvas.getContext('2d'), // ctx defines the context of the canvas as a two-dimensional value.
        lastTime; // Undefined variable.

    canvas.width = 505; // Defines the width of the canvas.
    canvas.height = 606; // Defines the height of the canvas.
    doc.body.appendChild(canvas); // Appends the canvas to the global document as a child.

    function main() { // Internal Main function of the engine. Keeps track of time. Calls for updates, renders, and tells the browser to perform an animation. It appears to do so only once.
        
        var now = Date.now(), // The variable now is defined as a method returning the amount of miliseconds that have transpired since 1970...
            dt = (now - lastTime) / 1000.0; //...the variable dt is defined as the difference between the value of the variable "now" and the value of the variable "lastTime", divided by 1000.

        /* Call our update/render functions, pass along the time delta to
         * our update function since it may be used for smooth animation.
         */
        update(dt); // A method which loads messages and returns a promise. 
        render(); // Calls the render function.

        lastTime = now; // Defines the variable lastTime as the value of Date.now().

        /* Use the browser's requestAnimationFrame function to call this
         * function again as soon as the browser is able to draw another frame.
         */
        
        win.requestAnimationFrame(main); // Tells the browser that we wish to perform an animation and requests that the browser perform a function to update the animation before the next repaint.
        victory();
    }

    function init() { // The initialize function calls the reset() function and the main() function as a way to create a new iteration of the game; as such, it redefines lastTime to create a new time.
        
        reset();
        lastTime = Date.now();
        main();
    }


    function update(dt) { // The update(dt) function draws upon the dt variable ((now - lastTime) / 1000.0). It is called by the main() function above.
    
        updateEntities(dt); // Calls the updateEntities(dt) function below.
        checkCollisions(); 
    }


    function updateEntities(dt) { // Called by update() function, which is in turn called by main(). Updates both enemies and the player itself.
        allEnemies.forEach(function(enemy) { 
            enemy.update(dt); // Cycles through enemy and updates them by dt ((now - lastTime) / 1000.0).
        });
        player.update(); // Updates the player.
    }

 

    function render() { // Called in the main() function above.
        /* This array holds the relative URL to the image used
         * for that particular row of the game level.
         */
        var rowImages = [ // An array of PNG images.
                'images/water-block.png',   // Top row is water
                'images/stone-block.png',   // Row 1 of 3 of stone
                'images/stone-block.png',   // Row 2 of 3 of stone
                'images/stone-block.png',   // Row 3 of 3 of stone
                'images/grass-block.png',   // Row 1 of 2 of grass
                'images/grass-block.png'    // Row 2 of 2 of grass
            ],
            numRows = 6, // The number of Rows.
            numCols = 5, // The number of columns.
            row, col; // Undeclared rows and columns.

        // Before drawing, clear existing canvas
        ctx.clearRect(0,0,canvas.width,canvas.height);

        /* Loop through the number of rows and columns we've defined above
         * and, using the rowImages array, draw the correct image for that
         * portion of the "grid"
         */
        
        //The above code preps the canvas for painting. The below code cycles through numRows and NumCols (6,5) and draws the image, also checking to see if each image has been cached (via resources.js).
        
        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                /* The drawImage function of the canvas' context element
                 * requires 3 parameters: the image to draw, the x coordinate
                 * to start drawing and the y coordinate to start drawing.
                 * We're using our Resources helpers to refer to our images
                 * so that we get the benefits of caching these images, since
                 * we're using them over and over.
                 */
                ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
            }
        }

        renderEntities(); // Loads renderEntities() below.
    }

    /* This function is called by the render function and is called on each game
     * tick. Its purpose is to then call the render functions you have defined
     * on your enemy and player entities within app.js
     */
    function renderEntities() { 
        allEnemies.forEach(function(enemy) {
            enemy.render();
        }); 

        player.render();
    } // Renders the enemies and the player. Called above.
    

    /* This function does nothing but it could have been a good place to
     * handle game reset states - maybe a new game menu or a game over screen
     * those sorts of things. It's only called once by the init() method.
     */
    function reset() { // Resetting sprite/locations locations
        player.x = 205;
        player.y = 405;
        for (const enemy of allEnemies) {
            enemy.x = 0;
        }
        clearTimeout(stop);
    }
    
    function victory() { // Victory scenario window providing the option to play again.
        let stop;
        if (player.y === -10) {
            stop = setTimeout(function() {
                let message = confirm("You've won! Play again?");
                if (message == true) {
                    reset();
                } else {
                    reset()
                    canvas.width = 0;
                    canvas.height = 0;
                    alert("Quitter!");
                }
            1 * 2000});
        }
        return;
    }
    
    function checkCollisions() { // Check for collisions between the player and the enemy. Calls reset() when a collision occurs.
        for (const enemy of allEnemies) { // Cycles through the allEnemies array
            if (player.x < enemy.x + enemy.width &&
                player.x + enemy.width > enemy.x &&
                player.y < enemy.y + enemy.height &&
                player.y + player.height > enemy.y) 
                {
                    reset();
                }
        }
    }

    /* Go ahead and load all of the images we know we're going to need to
     * draw our game level. Then set init as the callback method, so that when
     * all of these images are properly loaded our game will start.
     */
    Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/enemy-bug.png',
        'images/char-boy.png'
    ]);
    Resources.onReady(init);

    /* Assign the canvas' context object to the global variable (the window
     * object when run in a browser) so that developers can use it more easily
     * from within their app.js files.
     */
    global.ctx = ctx;
})(this);
