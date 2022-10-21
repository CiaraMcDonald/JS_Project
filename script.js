let wins = 0;
let ties = 0;
let losses = 0;

// Options for computer to select
let options = ['Rock', 'Paper', 'Sissors'];

let playGame = function () {

  for (let i = 1; i < 6; i++) {


    // Ask user for their choice
    let userChoice = window.prompt('Type R for Rock, P for Paper or S for Sissors.');

    // Convert to uppercase to avoid case errors
    userChoice = userChoice.toUpperCase();

    // Get random index from array of options
    let index = Math.floor(Math.random() * options.length);
    let computerChoice = options[index];

    alert('The computer chose ' + computerChoice);
    console.log('The computer chose ' + computerChoice);

    // If choices are the same, it's a tie
    if (
      (userChoice === 'R' && computerChoice === 'Rock') ||
      (userChoice === 'P' && computerChoice === 'Paper') ||
      (userChoice === 'S' && computerChoice === 'Sissors')
    ) {
      ties++;
      alert("It's a tie!");
      console.log("It's a tie!");

      // Check every win condition for the player
    } else if (
      (userChoice === 'R' && computerChoice === 'Sissors') ||
      (userChoice === 'P' && computerChoice === 'Rock') ||
      (userChoice === 'S' && computerChoice === 'Paper')
    ) {
      wins++;
      alert("You win!");
      console.log("You win!")
    } else if (
      (userChoice === "R" && computerChoice === "Paper") ||
      (userChoice === "P" && computerChoice === "Scissors") ||
      (userChoice === "S" && computerChoice == "Rock")
    ) {
      losses++;
      alert("You lose!");
      console.log("You lose!")
    } else {
      i--;
      alert("Error! Please type R, P, or S.");
      console.log("Error! Please type R, P, or S.");
    }
    if (playGame) {
      alert("End of round  " + i);
      console.log("End of round  " + i);
    }

    if (i == 5) {
      alert("Game Over");
      console.log("Game Over");
          // Print stats with line breaks
    alert('Stats:\nWins: ' + wins + '\nLosses: ' + losses + '\nTies: ' + ties);
    console.log('Stats:\nWins: ' + wins + '\nLosses: ' + losses + '\nTies: ' + ties);
    }
  }
};

// Run the game for the first time
playGame();