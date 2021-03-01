// Project Task
// Part I
var rock;
var paper;
var scissors;

var randomNumber;
var rounds = prompt ("How many rounds of do you want to play?");
var numbers = parseInt ("123456789"); 

var gameOptions =["rock","scissors","paper" ];



for (let i = 0; i < rounds.length; i++) {
 prompt ("Do you pick r, p, s" ) ;  {
    if (i < rounds[i]) {
    prompt("Do you pick r, p, s" );  
 } else   (i = rounds[i]); {
      prompt ("Do you pick r, p, s");
 } 

}
} 

var computerGame = ["rock", "paper", "scissors"]; 
var results;    
randomNumber = Math.floor(Math.random() * (3));
    console.log(randomNumber);
   
    if (randomNumber == 0 ) {
        computerGame = rock; 
    } else if (randomNumber == 1) {
        computerGame = paper;
    } else (randomNumber == 2); {
      computerGame = scissors;
          
      }

 var  userChoice;

 if ( userChoice === rock && computerGame === scissors ) {
   console.log ("You win with rock"); 
} else if ( userChoice === paper && computerGame === rock) {
    console.log ("You will with paper");
} else if ( userChoice === scissors && computerGame === paper) {
   console.log ("You win with scissors");
} else if (userChoice === paper && computerGame === scissors) {
   console.log ("You lose scissors cuts paper ");
 } else if (userChoice === rock && computerGame === paper) {
    console.log ("You lose paper covers rock"); 
 } else if (userChoice === scissors && computerGame === rock) {  
    console.log ("You lose rock crushes scissors");
 } else ( userChoice === computerGame ) 
   console.log("You tie with computer!");








