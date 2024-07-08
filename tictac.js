 let currentPlayer = 'X';
 let winner = document.getElementById('winner');
 let gameState = ['','','','','','','','',''];

 const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]  
 ] 

//handle my click
function handleClick(){
    let td = event.target;
    console.log(td);
    let index = td.getAttribute('id');
    //check if empty
    if(td.innerHTML=='')
    {
    td.innerHTML = currentPlayer; 
    gameState[index] = currentPlayer;
    //check for winner
    checkwinner();
    checkDraw();
    changePlayer();
    }
    

}


function changePlayer(){
    currentPlayer = currentPlayer == 'X'? 'O' : 'X';
}
function checkwinner(){
    for(let i=0; i<8; i++){
       var a = winConditions[i][0];
       var b = winConditions[i][1];
       var c = winConditions[i][2];
     
       console.log(gameState[a]);
       console.log(gameState[b]);
       if(gameState[a]==currentPlayer && gameState[b]==currentPlayer &&  gameState[c]==currentPlayer){
                   winner.innerHTML = "WINNER IS " + currentPlayer;
                   console.log("hello");
        }
               
       }
}

function checkDraw(){
    if(!gameState.includes('')){
        winner.innerHTML = 'Game Draw!'
    }
}

function init(){
    var tdCells = document.getElementsByTagName('td');

    for(let i=0; i<9; i++){
        tdCells[i].addEventListener('click', handleClick);
    }
}
init();
