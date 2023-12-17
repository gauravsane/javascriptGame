let currentObj;
let currentFruit;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    // set up the grid for the game board in html
    for(let i = 0; i < 9; i++){
        // we createa div tag with 0-8 id
        let tiles = document.createElement('div');
        tiles.id = i.toString();
        tiles.addEventListener('click',selectTile);
        document.getElementById('board').appendChild(tiles);
    }

    setInterval(setObj, 900);

    setInterval(setFruit, 1000);
}

function getRandomTiles() {
    // math.random generates 0-8 numbers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setObj() {
    if(gameOver){
        return;
    }


    if(currentObj){
        currentObj.innerHTML = "";
    }

    let obj = document.createElement('img');
    obj.src = './luffy.png';

    let num = getRandomTiles();
    if (currentFruit && currentFruit.id == num){
        return;
    }

    currentObj = document.getElementById(num);
    currentObj.appendChild(obj);
}

function setFruit() {
    if(gameOver){
        return;
    }


    if(currentFruit){
        currentFruit.innerHTML = "";
    }

    let fruit = document.createElement('img');
    fruit.src = './fruit.png';

    let num = getRandomTiles();
    if (currentObj && currentObj.id == num){
        return;
    }
    currentFruit = document.getElementById(num);
    currentFruit.appendChild(fruit);
}


function selectTile() {
    if(gameOver){
        return;
    }
    if(this == currentObj){
        score += 10;
        document.getElementById("score").innerText = score.toString();  //update the score
        // document.getElementById(num).style.visibility = 'hidden';
    }
    else if(this == currentFruit){
        document.getElementById("score").innerText = 'GAME OVER: ' + score.toString();
        gameOver = true;
    }
}