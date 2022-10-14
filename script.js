let wins = 0;
let ties = 0;
let losses = 0;

// Options for computer to select
let options = ['Rock', 'Paper', 'Sissors'];

let playGame = function () {

  let startGame = confirm('Lets play Rock, Paper, Sissors!');
  if (!startGame) {
    return;
  }

  // Ask user for their choice
  let userChoice = window.prompt('Type R for Rock, P for Paper or S for Sissors.');

  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }

  // Convert to uppercase to avoid case errors
  userChoice = userChoice.toUpperCase();

  // Get random index from array of options
  let index = Math.floor(Math.random() * options.length);
  let computerChoice = options[index];

  alert('The computer chose ' + computerChoice);

  // If choices are the same, it's a tie
  if (
    (userChoice === 'R' && computerChoice === 'Rock') ||
    (userChoice === 'P' && computerChoice === 'Paper') ||
    (userChoice === 'S' && computerChoice === 'Sissors')
  ) {
    ties++;
    alert("It's a tie!");

  // Check every win condition for the player
  } else if (
    (userChoice === 'R' && computerChoice === 'Sissors') ||
    (userChoice === 'P' && computerChoice === 'Rock') ||
    (userChoice === 'S' && computerChoice === 'Paper')
  ) {
    wins++;
    alert("You win!");

  // If above conditions failed, assume player lost
  } else {
    losses++;
    alert("You loose!");
  }

  // Print stats with line breaks
  alert('Stats:\nWins: ' + wins + '\nLosses: ' + losses + '\nTies: ' + ties);

  // Do you want to play again?
  let playAgain = confirm('Play again?');

  // If user pressed OK, play the game again
  if (playAgain) {
    playGame();
  }
};

// Run the game for the first time
playGame();