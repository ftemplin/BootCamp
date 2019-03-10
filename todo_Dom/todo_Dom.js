//alert("connected to todo_Dom");

//var firstLI = document.querySelector("LI");

// it is important to use querySelectorAll her to get all of the Li elements
var lis = document.querySelectorAll("Li");


// NOw we need a for loop to iterate through each element
for(var i=0; i< lis.length; i++){
	// this code was refactored from below to keep style controls in the css
	lis[i].addEventListener("mouseover", function(){
		this.classList.add("selected"); 

	// lis[i].addEventListener("mouseover", function(){
	// 	this.style.color = "green";
	});
	// this code was refactored form below to keep style controls in the css
	lis[i].addEventListener("mouseout", function(){
		this.classList.remove("selected"); 
	// thecode below was teh original manipulation changed to give control to css above
		// lis[i].addEventListener("mouseout", function(){
		// 	this.style.color = "black";
	});
	lis[i].addEventListener("click", function(){
			this.classList.toggle("done");
	});
}

// firstLI.addEventListener("mouseover", function(){
// 	firstLI.style.color = "green";
// });

// firstLI.addEventListener("mouseout", function(){
// 	firstLI.style.color = "black";
// });