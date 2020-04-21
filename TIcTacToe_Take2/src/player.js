class Player {
    constructor(name, id, symbol) {
        this.name = name;
        this.id = id || Date.now()
        this.symbol = symbol;
    }

    saveUserInStorage() {
        var winnerToStore = {id: this.id, name: this.name, image: this.image, gameInfo: state.squares}
        var stringifiedUser = JSON.stringify(winnerToStore)
        localStorage.setItem(`${this.id}`, stringifiedUser) 
    }  
} 

//     getUserGameRecord() {
//         retrieveFromStorage()
//         displayRecord()
//         displayWinBoards()
//     }

    
//     updateActionStatus() {
//         this.actionRequired = true !== false ? false:true;
//     }
