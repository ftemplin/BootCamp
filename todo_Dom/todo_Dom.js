alert("connected to todo_Dom");

var firstLI = document.querySelector("LI");

firstLI.addEventListener("mouseover", function(){
	firstLI.style.color = "green";
});

firstLI.addEventListener("mouseout", function(){
	firstLI.style.color = "black";
});