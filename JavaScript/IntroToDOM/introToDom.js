console.log("Connected to introToDom.js");

var h3 = document.querySelector("h3");

h3.style.color = "green";

var body = document.querySelector("body");
var isBlue = false;
var count = 0;
setInterval(function(){
	if (isBlue && count < 10) {
		body.style.background = "white";
		count ++

	}else{
		body.style.background = "Blue";
	}
	isBlue = !isBlue;
}, 1000);