/**
 * Guess The Number Game
 * TODO: Get user value from input and save it to variable numberGuess
 * TODO: Generate a random number 1 to 100 and save it to variable correctNumber
 * TODO: Console whether the guess is too high, too low, or is correct inside playGame function
 * TODO: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
 * TODO: Use the showYouWon... functions within displayResult to display the correct dialog
 * TODO: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 
let guesses = [];
// Variable for store the correct random number 
let correctNumber = getRandomNumber();


window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
    
   
    
    
    
}

function domEvent() {
  // for(let i = 0; i < document.body.children.length; i++) {
    // alert(document.body.children[i].innerHTML);
  // }

  //alert(document.body.firstChild);
  // alert(document.body.firstElementChild.innerHTML);
  alert(document.body.lastElementChild.innerHTML);
}




function modDom() {
  let elem = document.createElement('LI');
  elem.innerText = "You  have Guessed 20"
  elem.className = "list-group-item"
  document.getElementsByClassName('list-group')[0].append(elem);
  document.getElementsByClassName('list-group')[0].children[0].innerHTML  = '<b> 37</b>' 
  // document.getElementsByClassName('list-group')[0].className = "alert"    assigns a classname
  //document.getElementsByClassName('list-group')[0].classList.add('fany-list')  This adds a class name to list

}

/**
 * Functionality for playing the whole game
 */
function playGame() {
  // CODE GOES HERE
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
 //  modDom();
  
  
 //console.log(numberGuess);
 

}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
// *CODE GOES BELOW HERE *
function displayResult(numberGuess) {
  //console.log(correctNumber);
  if (numberGuess > correctNumber) {
    showNumberAbove();

  }
  else if (numberGuess < correctNumber) {
    showNumberBelow();
  }
  else if (numberGuess == correctNumber) {
    
    showYouWon();
  }

}




/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
  // *CODE GOES BELOW HERE *
  
 correctNumber = getRandomNumber();
  document.getElementById("result").innerHTML = "";
  guesses = []; // Reset the array of guesses
  displayHistory(); // Reset the History List
  document.getElementById("number-guess").value = "";
}

/**
 * Reset the HTML content for guess history
 */



/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 * */
function getRandomNumber(){
  let randomNumber = Math.random() * 100;
  let wholeNumber = Math.floor(randomNumber) + 1;
  return wholeNumber;
  
  

}
 
 


/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
  guesses.push(guess);
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index = guesses.length -1;   // TODO haave to get the position starting from last input thas made
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  while (index >= 0) {
    list += "<li class='list-group-item'>" + 
    " You guessed "   + guesses[index] + "</li>";
    
    index -= 1; // decrement to avoid infinite loop
    
  }
  list += '</ul>';
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}


  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters 
   */
  // *CODE GOES BELOW HERE *

  function showYouWon() {
    const text = "Awesome job, you got it !";

    let dialog = getDialog('won', text);
    document.getElementById("result").innerHTML = dialog;


  }



  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  function showNumberAbove(){
    const text = "The Number is Too High!";

    let dialog = getDialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
  }


  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  function showNumberBelow(){
    const text = "The Number is Too Low!";

    let dialog = getDialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
  }

