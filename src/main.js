


var wrapper = document.querySelector('.wrapper')
var allRows = document.querySelectorAll('.row')
var allSquares = document.querySelectorAll('.square')
var opponents = document.querySelector('.opponents')

var squares = []

document.onload = retrieveFromStorage()



function clearBoard() {
  allSquares.forEach(function(square) {
    square.innerHTML = "";
  });
  setMessage("");
}

function render() {
  var playerHTML = '';
  opponents.forEach(function(player) {
    playerHTML += `
      <div class='player'
      title='${player.title}' id='${player.id}' image='${player.image} isTurn='${player.isTurn} squares='${player.occupiedSquares} history=${player.gameHistory}>
      </div>
    `
  })
  opponents.innerHTML = playerHTML;
}
  // for (var i = 0; i <=1 ; i++) {
  //   playerX
  // }
  // var squareHTML = ''
  // row.forEach(function(row) { 
  //   squareHTML += `
  //     <div class='square' title=${allRows.title} isVacant=${allRows.isVacant} name=${allRows.name} id=${allRows.id}'>${i}</div>
  //   `
  // })
  // allRows.innerHTML = squareHTML;




// allRows.addEventListener('click', function() {
//   var square = event.target.parentNode
  
//   checkForVacancy()
//   checkForWinner()
// })

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
