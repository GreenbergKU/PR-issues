class Player {
    constructor(id, name, image) {
        //actionRequired = false;
        this.name = name;
        this.id = id;
        this.image = image;
        // this.isturn = false;
        // //this.actionRequired = actionRequired == undefined ? false : actionRequired;
        // this.gameHistory = [];
        // this.occupiedSquares = []

    }

    saveUserInStorage() {
        var userToStore = {id: this.id, name: this.name, image: this.image, gameHistory: this.gameHistory}
        var stringifiedUser = JSON.stringify(userToStore)
        localStorage.setItem(`storedIdea${this.id}`, stringifiedUser) 
    }   

    getUserGameRecord() {
        retrieveFromStorage()
        displayRecord()
        displayWinBoards()
    }

    
    updateActionStatus() {
        this.actionRequired = true !== false ? false:true;
    }

    //id == user input
    //loop to check if id has been used previously, if not, then ok, else 'pick new name'
}
function retrieveFromStorage() {
    for (var i = 0; i < localStorage.length; i++) {
      var recordToRetrieve = localStorage.getItem(localStorage.key(i))
      var parsedRecord = JSON.parse(recordToRetrieve)
      reconstruct(parsedRecord)
    }
    render()
  }
  
  function reconstruct(parsedRecord) {
      var gameRecordReplica = new Idea(parsedRecord.name, parsedRecord.id, parsedRecord.image, parsedRecord.gameHistory)
      gameRecord.push(gameRecordReplica)
  }