//alert("connected to scoreKeeper.js");

var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");


p1Button.addEventListener("click", function(){
	//alert("p1 clicked!");
	//console.log("p1Score");
	p1Score++;
	p1Display.textContent = p1Score;
});

p2Button.addEventListener("click", function(){
	//alert("p2 clicked!");
	p2Score++;
	p2Display.textContent = p2Score;
});