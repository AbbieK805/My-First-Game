const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 50;
let speed = 5;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

function drawGame() {
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    boundaryCheck();
    drawPinkGame();
}

function boundaryCheck() {
    // up
    if (y < radius) {
        y = radius;
    }
    // down
    if (y > canvas.height - radius) {
        y = canvas.height - radius;
    }
    // left
    if (x < radius) {
        x = radius;
    }
    // right
    if (x > canvas.width - radius) {
        x = canvas.width - radius;
    }
}

function inputs() {
    if (upPressed) {
        y = y - speed;
    }
    if (downPressed) {
        y = y + speed;
    }
    if (leftPressed) {
        x = x - speed;
    }
    if (rightPressed) {
        x = x + 5;
    }
}

function drawPinkGame() {
    ctx.fillStyle = "hotpink";
    if (upPressed) {
        ctx.fill.style = "purple";
    }
    if (downPressed) {
        ctx.fillStyle = "yellow"
    }
    if (leftPressed) {
        ctx.fillStyle = "aquamarine"
    }
    if (rightPressed) {
        ctx.fillStyle = "white"
    }


    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function clearScreen() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

function keyDown(event) {
    // up
    if (event.keyCode == '38') {
        upPressed = true;
    }

    // down
    if (event.keyCode == '40') {
        downPressed = true;
    }

    // left
    if (event.keyCode == '37') {
        leftPressed = true;
    }

    // right
    if (event.keyCode == '39') {
        rightPressed = true;
    }
}


function keyUp(event) {
        // up
        if (event.keyCode == '38') {
            upPressed = false;
        }
    // down
        if (event.keyCode == '40') {
            downPressed = false;
        }
        // left
        if (event.keyCode == '37') {
            leftPressed = false;
        }
        // right
        if (event.keyCode == '39') {
            rightPressed = false;
        }
    }

     
          drawGame();






