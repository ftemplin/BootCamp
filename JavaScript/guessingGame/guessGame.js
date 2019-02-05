//alert("connected to guessGame.js");

//create secret #
var secretNumber = 4;

// ask user for their guess
//var guess = Number(prompt("Guess a number"));

//compare guess and secret number.
//while(Number(guess) != secretNumber){
// if (guess === secretNumber){
// 	alert("You guessed the number!");
 
  while(guess !== secretNumber){
  	var guess = Number(prompt("Guess a number"));
	if (guess > secretNumber){
		alert("you guessed high");
	 }
	else if(guess < secretNumber){
		alert("You guessed low");
	 }else{

	 }
	}
alert("You guessed the number!");