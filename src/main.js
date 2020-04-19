


var gameRecord = []
var occupiedSpaces = []
var winningTriphecta = []


function retrieveFromStorage() {
    for (var i = 0; i < localStorage.length; i++) {
      var recordToRetrieve = localStorage.getItem(localStorage.key(i))
      var parsedRecord = JSON.parse(recordToRetrieve)
      reconstruct(parsedRecord)
    }
}

function reconstruct(parsedRecord) {
    var gameRecordReplica = new Idea(parsedRecord.name, parsedRecord.id, parsedRecord.image, parsedRecord.gameHistory)
    gameRecord.push(gameRecordReplica)
}

//A main.js file that contains all DOM related JavaScript