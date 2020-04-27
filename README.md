# PR-issues

README.md
# FINAL PROJECT: Tic-Tac-Toe


[Sue's Slack profile photo](https://ca.slack-edge.com/T029P2S9M-UTPTTDE84-13b671276cf8-72)
[Casey Dallavalle's Slack profile photo](https://ca.slack-edge.com/T029P2S9M-U6VMF6L85-fa69b231d590-72)

![Screen Shot 2020-04-16 at 10 02 15 PM](https://user-images.githubusercontent.com/10098034/79581104-3072ed80-8087-11ea-9d3b-9a2c53522196.png)


* project manager: __CASEY__ [(github)](https://github.com/turingschool-examples)
* contributer: __Sue__ [(github)](https://github.com/GreenbergKU)
<!-- 
Suzannne Wolf
https://ca.slack-edge.com/T029P2S9M-UTPTTDE84-13b671276cf8-72)
Casey Dallavalle
https://ca.slack-edge.com/T029P2S9M-U6VMF6L85-fa69b231d590-72) 
-->

### Turing MOD 1 SOLO PROJECT focusing on the DATA MODEL

Player view switches to show whos turn it is after player has placed their token
3 in a row, can be a draw,
no names, any image can be the token, don't waste time on design in the beginning
if player tries to click on an occupied square, token is not replaced, that area should be unclikckable insteaad
collect visual 'mini cards' of players winning boards on one half of screen
other player's boards are on the other half, split vertically down middle
Tokens DO NOT replace tokens

### ARCHITECHCTURE

Your entire application will consist of one HTML page or template. You will have three JavaScript files: A player.js file that contains a Player class. Player methods must include, but are not limited to: constructor - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: []) saveWinsToStorage retrieveWinsFromStorage A game.js file that contains a Game class. A Game should include: Two Player instances A way to keep track of the data for the game board A way to keep track of which player’s turn it currently is A way to check the Game’s board data for win conditions A way to detect when a game is a draw (no one has won) A way to save a winning Game’s board data to the correct player’s wins array A way to reset the Game’s board to begin a new game A main.js file that contains all DOM related JavaScript

### DATA MODEL

* In a game like Tic Tac Toe, it is tempting to manipulate the DOM first. 
* Remember that the game logic exists exclusively in the data model. 
* The DOM simply reflects/displays that data model.

### SUGGESTED ITERATIONS

* This workflow is not required, but will help you meet the overall requirements of the project.
* Plan out the HTML layout (colors and icons do not need to match, but overall layout should closely match the demo video) 
* Create the Player class Create the Game class 
* Make game fully playable without the DOM (manually updating the Game.board data, etc, from your console) 
   
   **to force yourself to think data-model**
  -1. First Create central game board on the DOM 
  -2. Connect Game data model to the DOM 
  -3. Display the Player data in the sidebars 
  
* Automatically reset the game board to allow for a new game to be played after the previous game is won 
* Persist Player data using local storage (number of wins and mini-boards displaying won games should persist across page refreshes)
 
## RUBRIC
### score key:

#### 4: 
- Over-achievement - student did self-teaching and accomplished beyond scope of project, without sacrificing code quality in the pursuit of extensions; all code demonstrates strong mastery of DRY principles and SRP conventions 
#### 3: 
- Right on track - student is exactly where we want them to be, has a strong foundation, and demonstrates competency and comfort with the subject 
#### 2: 
- A little behind - student needs to focus study in this area to catch up to where they should be in terms of proficiency 
#### 1: 
- Very behind - student needs intervention to get back on track Overall rubric scores will be averaged. Here is what the average score means in terms of completing the module:

#### 4: 
- Student will complete module if prior project work, attendance, and final assessment corroborate readiness 
#### 3+: 
- Student will complete module if prior project work, attendance, and final assessment corroborate readiness 
#### 2+: 
- Student may complete module if prior project work, attendance, and final assessment corroborate readiness
#### 2: 
- Student needs more time with concepts and work covered in module

## FUNCTIONAL EXPECTATIONS

#### 4: 
- Application is fully complete (matches all functionality from demo, without bugs), and implements additional functionality devised by the student 
#### 3: 
- Application is fully complete (matches all functionality from demo, and persists across refreshes) 
#### 2: 
- Able to play an entire game successfully (win, draw, displayed player data updates) 
#### 1: 
- Unable to play an entire game successfully 

## PROFESSIONALISM 
- We still expect you to use good workflow practices! Atomic commits, use of branches and PRs (you will be merging these PRs yourself).

#### 4:
A PR template was used. A code review was requested and completed by a mentor developer can speak to how the feedback in code review was implemented (and point to the commit(s) that implemented the feedback). Developer is ready to clearly present the evolution of this app during the eval - from architecture decisions made in the planning process, to wins and challenges throughout. 
#### 3:
Developer is able to clearly answer questions regarding the evolution of this app during the eval - from architecture decisions made in the planning process, to wins and challenges throughout. A project board/planning document is used and updated throughout the project. Branches are used. Most commits are formatted correctly. The README is formatted well and contains: Overview of project and goals Overview of technologies used, challenges, wins, and any other reflections Screenshots/gifs of your app 
#### 2:
Developer is able to answer questions regarding the evolution of the app, but may need some prompts to clearly articulate or provide enough context. More than a few commits are formatted incorrectly. The README is formatted well but may be lacking in detail. 
#### 1:
Developer struggles to answer questions regarding the evolution of the app. OR: Commit and PR history does not tell a story of the application OR: A README has not been created/has minimal information. 

## JAVASCRIPT - STYLE and IMPLEMENTATION 

#### 4:
Code is well refactored and demonstrates developer empathy. No global variables are used aside from query selectors, start time, and instance of Game. If you feel you need more because you are building out additional functionality that requires a global variable, please check in with an instructor. There are no instances of repetitive code No functions are longer than 10 lines 
#### 3:
The separation of data model logic and presentational logic is clear and can be explained by developer. The application correctly implements a data model for the Player and Game classes, including all required methods. Developer can speak to the role of each class. All DOM manipulation is handled exclusively in main.js. Developer demonstrates understanding and ability to refactor code by having at least 1 example of DRY code that was intentionally reused. SRP is evidenced by clear, concise function names; each function only does what the name describes. 
#### 2:
Arguments and parameters are used to limit global variables. The event object is used correctly, and is not accepted as a parameter if it is not necessary. Developer can speak to how the event object is utilized for any given event handler. Function and variable names describe their role in the program. Examples: The name of the data type should not ever be in a variable name (ex: “petArray”); the name itself should be clear enough to indicate the type of data it holds (ex: “allPets”). An event handler should not have “handler” in the name (ex: “clickHandler”); the name should indicate the handler’s purpose (ex: “addNewPet”). 
#### 1:
Style and syntax meets the criteria of the Turing JS Style Guide. Function declarations are used over anonymous functions in event listeners.

### STYLE GUIDE REFERENCES

* Turing's [HTML Style Guide]:(https://github.com/turingschool-examples/html)

* Turing's [CSS Style Guide]:(https://github.com/turingschool-examples/css)

* Turing's [JavaScript Style Guide]:(https://github.com/turingschool-examples/javascript)
