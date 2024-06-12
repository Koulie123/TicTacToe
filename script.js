
function gameBoard() {
    let gameGrid = [];
    const boardSpaces = document.querySelectorAll(".board-space");
    const addButtonsToBoard = function() {
        boardSpaces.forEach((element) => {
            element.addEventListener("click", () => {
                if(gameGrid[element.id].value == "") {
                    gameGrid[element.id].value = getTurnType();
                    if (checkForWin(getTurnType())) updatePlayerHasWon(getTurnType() +" has won!");
                    if (checkForDraw()) updatePlayerHasWon("It's a draw!")
                    increaseTurn();
                    updateBoardState();
                    updateCurrentPlayer();
                }
            })
        })
        const resetButton = document.querySelector("#reset-button");
        resetButton.addEventListener("click", resetBoard);
    }
    const updatePlayerHasWon = function (content) {
        let playerWonDiv = document.querySelector("#player-has-won");
        playerWonDiv.textContent = content;
        
    }
    const createGameBoard = () => {
        gameGrid = [];
        for(let i = 0; i < 3; i++){
            for(let j = 0; j<3; j++) {
                gameGrid.push({value: ""});
            }
        }
        return gameGrid;
    }
    const getGameBoard = () => gameGrid;
    let turnNumber = 1;
    const increaseTurn = () => turnNumber++;
    const getTurnNumber = () => turnNumber; 
    const getTurnType = function() {
        if (turnNumber % 2 == 1) return "X";
        else return "O";
    }
    const checkForWin = function(x) {
        if (gameGrid[0].value == x && gameGrid[1].value == x && gameGrid[2].value == x) return true;
        if (gameGrid[3].value == x && gameGrid[4].value == x && gameGrid[5].value == x) return true;
        if (gameGrid[6].value == x && gameGrid[7].value == x && gameGrid[8].value == x) return true;
        if (gameGrid[0].value == x && gameGrid[3].value == x && gameGrid[6].value == x) return true;
        if (gameGrid[1].value == x && gameGrid[4].value == x && gameGrid[7].value == x) return true;
        if (gameGrid[2].value == x && gameGrid[5].value == x && gameGrid[8].value == x) return true;
        if (gameGrid[0].value == x && gameGrid[4].value == x && gameGrid[8].value == x) return true;
        if (gameGrid[2].value == x && gameGrid[4].value == x && gameGrid[6].value == x) return true;
        return false;
    }
    const checkForDraw = function() {
        for(let i = 0; i < 9; i++) {
            if(gameGrid[i].value == "") return false;
        }
        return true;
    }
    // const checkForWin = function(x) {
    //     if (gameGrid[0].value == gameGrid[1].value == gameGrid[2].value && (gameGrid[0].value != "")) {
    //         console.log(getGameBoard());
    //         return true;}
    //     if (gameGrid[3].value == gameGrid[4].value == gameGrid[5].value && (gameGrid[3].value != "")) return true;
    //     if (gameGrid[6].value == gameGrid[7].value == gameGrid[8].value && (gameGrid[6].value != "")) return true;
    //     if (gameGrid[0].value == gameGrid[3].value == gameGrid[6].value && (gameGrid[0].value != "")) return true;
    //     if (gameGrid[1].value == gameGrid[4].value == gameGrid[7].value && (gameGrid[1].value != "")) return true;
    //     if (gameGrid[2].value == gameGrid[5].value == gameGrid[8].value && (gameGrid[2].value != "")) return true;
    //     if (gameGrid[0].value == gameGrid[4].value == gameGrid[8].value && (gameGrid[0].value != "")) return true;
    //     if (gameGrid[2].value == gameGrid[4].value == gameGrid[6].value && (gameGrid[2].value != "")) return true;
    //     return false;
    // }
    const  updateBoardState = function (){
        for(let i = 0; i < 9; i++){
            let element = document.getElementById(i);
            element.textContent = gameGrid[i].value;
            // console.log("Board state value is " + gameGrid[i].value + "at point" + i);
        }
    }
    const updateCurrentPlayer = function () {
        const currentPlayerTurnDiv = document.getElementById("player-turn");
        const turnType = getTurnType();
        currentPlayerTurnDiv.textContent = ("It is currently " + turnType +"'s turn!");
    }
    
    const runGame = function() {
        let boardGameGrid = createGameBoard();
        addButtonsToBoard();
        // while(true){

        // }
    }
    const resetBoard = function() {
        console.log("Resetting the board");
        console.log(getGameBoard());
        gameGrid = createGameBoard();
        turnNumber = 1;
        updateBoardState();
        updateCurrentPlayer();
        console.log("Resetting the board is done");
        console.log(getGameBoard());


    }

return { createGameBoard, increaseTurn, getTurnNumber, getTurnType, checkForWin, runGame, getGameBoard, resetBoard};
}










//Game loop
//Player takes turn
//Game board Updates
// Checkes for Win








//Game loop starts here
let gameBoardObject = gameBoard();
gameBoardObject.runGame();
// console.log(gameBoardObject.createGameBoard());
// console.log("");
// updateCurrentPlayer(gameBoardObject);
// updateBoardState(gameBoardObject.getGameBoard())


// Added functions to Buttons
// const resetButton = document.querySelector("#reset-button");
// resetButton.addEventListener("click", gameBoardObject.resetBoard());