console.log("Conected to DOM_Manipulation.js")

document.querySelector("#content h1").addEventListener("click", function(){
alert("you clicked the h1")
});
var isPurple = false;
document.querySelector("#content2 button").addEventListener("click", function(){
	//alert("clicked")
	//if(#content )
	if(isPurple){
		document.body.style.background = "white";
		isPurple = false;
	}else{
		document.body.style.background = "purple";
		isPurple = true;
	}
	
});



