class Game {
    constructor() {
        this.playerX = new Player 
        this.playerO = new Player
        //this.matchup = [] 
        this.winningTriphecta = []
        this.opponents = [this.playerX, this.playerO]  
        this.currentPlayer = this.playerX  !== undefined ? 
        this.occupiedSquares = []     
    }
    
    takeTurn(){
        
    }
    
    // checkSquareVacancy() {
    //     this.opponents.forEach()`[${name}.occupiedSpaces.length]` 
    // }
}

// for (var i = 0; i < (`[${name}.occupiedSpaces.length]`); i++)





// A game.js file that contains a Game class.
// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// Function (checkSquareVacancy)
//      


// A way to keep track of which player’s turn it currently is
//
//checkSquareVacancy()
//if false: checkForWinner()
// if (true) {alert: ${player.name} it's your turn} -flash their image on screen

//checkForWinner()


// 
//              Alert DRAW!
//             - clear board
//             -
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to save a winning Game’s board data to the correct player’s wins array
// A way to reset the Game’s board to begin a new game