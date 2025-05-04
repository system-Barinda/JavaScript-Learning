const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
const canvasSize = 400;
const totalRows = canvasSize / gridSize;
const totalColumns = canvasSize / gridSize;

let snake = [
    {x : 5 * gridSize, y: 5 * gridSize},
    {x : 4 * gridSize, y: 5 * gridSize},
    {x : 3 * gridSize, y: 5 * gridSize}
];

let direction = 'RIGHT';
let food = { x : 10 * gridSize, y : 10 * gridSize};
let score = 0;

// draw the game snake body

function drawSnake ()
{
    snake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? 'lime':'green';
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);


    });
}
// the operation of creating the food kbx;

function drawFood()
{
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, gridSize,gridSize);
}
//update the possition of snake game

function updateSnake ()
{
    const head = { ...snake[0] };

    switch (direction)
    {
        case 'UP':
            head.y -= gridSize;
            break;
        case 'DOWN':
            head  += gridSize;
        break;
        case 'LEFT':
            head.x -= gridSize;
            break;
         case 'RIGHT':
                head.x += gridSize;
                break;

    }
    snake.unshift(head); // add new head to the snake arry

    // check the if snake eat the snake;
    if( head.x === food.x && head.y === food.y)
    {
        score += 10;
        placeFood();

    }
    else 
    {
        snake.pop(); // remove the tail;

    }
}

// check the for collision
function checkCollisions ()
{
    const head = snake[0];

    // check the wall of collisions
    if(head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize){
        return true;
    }
     // the check of self collision

     for( let i = 1; i < snake.length; i++)
     {
        if(head.x === snake[i].x && head.y === snake[i].y)
        {
            return true;
        }
     }
     return false;
}

// place the food at randomly
function placeFood()
{
    food.x = Math.floor(Math.random() * totalRows) * gridSize;
    food.y = Math.floor(Math.random() * totalColumns) * gridSize;

}

// draw the game elements;

function draw ()
{
    ctx.clearRect(0, 0, canvasSize, canvasSize); //clear the canvas
    drawSnake();
    drawFood();
}

// update the game state;

function update()
{
    updateSnake();
    if( checkCollisions())
    {
        alert('game is over:' + score);
        snake = [
         {x: 5 * gridSize,y: 5 * gridSize},
         {X: 4 * gridSize,y: 5 * gridSize},
         {x: 3 * gridSize,y: 5 * gridSize}
        ];
        direction = 'RIGHT';
        score = 0;
    }
    draw();
}
// control the snake game the state direction

document.addEventListener('keydown', (event) => {
   switch(event.key)
   {
           case 'ArrowUp':
            if ( direction !== 'DOWN') direction = 'UP';
            break;
            case 'ArrowDown':
            if ( direction !== 'UP') direction = 'DOWN';
            break;
            case 'ArrowLeft':
            if ( direction !== 'RIGHT') direction = 'LEFT';
            break;
            case 'ArrowRight':
            if ( direction !== 'LEFT') direction = 'RIGHT';
            break;
               
        }    
});

// then game loop

function gameLoop()
{
    update();
    setTimeout(gameLoop, 100);

}

placeFood();
gameLoop();
