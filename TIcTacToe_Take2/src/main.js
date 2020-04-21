document.onload = ;

var WINNING_POS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

var USERS = {X: 'X', O: 'O' };

// ===== DOM ELEMENTS =====
// game container to attach click event for event delegation
var gameContainer = document.querySelector('.game-container');
// array of box elements
var boxes = document.querySelectorAll('.box');
// text element to indicate who the current player is
var userTurnEl = document.querySelector('.current-player');
// text element to indicate who the winner is
var winnerEl = document.querySelector('.winner');
var miniCenter = document.querySelector('.mini-container-center')
// ===== State of the game =====
var state = {
  spaces: (new Array(9)).fill(null),
  currentPlayer: USER.X, // player X has first turn by default
  hasWinner: false,
  allBoxesFilled: false
};

// ===== Methods to update DOM =====
function updateBox(index, val) {
  boxes[index].innerText = val === null ? '&nbsp;' : val;
}

function updateCurrentPlayerDisplay(user) {
  userTurnEl.firstElementChild.innerText = user;
}

function updateWinnerDisplay(winner) {
  // hide current player element
  userTurnEl.classList.add('hide');
  // show winner element and update winning text
  winnerEl.classList.remove('hide');
  winnerEl.innerText = winner ? `Winner: ${winner}` : `No winner! It's a tie!`;
}

// get alternate user
function changeUser(curr) {
  return curr === USER.X ? USER.O : USER.X;
}

// check if a box element in the DOM is empty/not
function isBoxFilled(index) {
  var content = boxes[index].innerText;
  return content === USER.X || content === USER.O;
}

// check if there is a winning combo in the game
function checkWinner(currentPlayer) {
  var result = false;
  for (let i = 0; i < WINNING_POS.length; i++) {
    var combo = WINNING_POS[i];
    result = combo.every(index => state.spaces[index] === currentPlayer);
    if (result) break;
  }
  
  return result;
}

// use event delegation pattern to capture event at parent element (aka Game Container)
gameContainer.addEventListener('click',function(event) {
  // get box index that is being clicked
  var index = event.target.dataset.index;

  // Don't do anything if no box is clicked, OR
  // if the box is already filled, OR game has ended
  if (!index || isBoxFilled(index) || state.hasWinner) return;

  // update state of space array
  state.spaces[index] = state.currentPlayer;
  // update box element in DOM
  updateBox(index, state.currentPlayer);
  // check if there is a winner
  state.hasWinner = checkWinner(state.currentPlayer);
  // check if all boxes are filled
  state.allBoxesFilled = !!!state.spaces.includes(null);


  if (state.hasWinner) {
    updateWinnerDisplay(state.currentPlayer);
  } else {
    state.currentPlayer = changeUser(state.currentPlayer);
    updateCurrentPlayerDisplay(state.currentPlayer);
  }  // if all boxes are filled, display that it is a tie and no winner found
    if (state.allBoxesFilled) updateWinnerDisplay();
});

// Display initial player at the beginning of the game
updateCurrentPlayerDisplay(state.currentPlayer);
