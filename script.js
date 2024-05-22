const gameBoaord = (function() {
    let gameGrid = [];
    const createGameGrid = function(){
        gameGrid = [];
        for(i; i < 3; i++){
            for(j; j<3; j++) {
                gameGrid.push({});
            }
        }
        return gameGrid;
    }
});