//alert("connected to scoreKeeper.js");

var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var gameOver = false;
var win = 5;


p1Button.addEventListener("click", function(){
	//alert("p1 clicked!");
	//console.log("p1Score");
	if(!gameOver){
		p1Score++;
		if(p1Score === win){
			p1Display.classList.add("winner");
			gameOver = true;
			//console.log("Game Over!");
		}
		p1Display.textContent = p1Score;
	}
	
});

p2Button.addEventListener("click", function(){
	//alert("p2 clicked!");

	if(!gameOver){
		p2Score++;
		if(p2Score === win){
			p2Display.classList.add("winner");
			gameOver = true;
			//console.log("Game Over!");
		}
		p2Display.textContent = p2Score;
	}
});