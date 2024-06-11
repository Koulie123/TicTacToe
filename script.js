
function gameBoard() {
    const createGameBoard = () => {
        let gameGrid = [];
        for(let i = 0; i < 3; i++){
            for(let j = 0; j<3; j++) {
                gameGrid.push({});
            }
        }
        return gameGrid;
    }
    let turnNumber = 1;
    const increaseTurn = () => turnNumber++;
    const getTurnNumber = () => turnNumber; 
    const getTurnType = () => {
        if (turnNumber % 2 == 0) return "X";
        else return "O";
    }
return { createGameBoard, increaseTurn, getTurnNumber, getTurnType};
}



















//Game loop starts here
let gameBoardObject = gameBoard();
console.log(gameBoardObject.createGameBoard());
console.log("")