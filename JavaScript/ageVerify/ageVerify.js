alert("connected to ageVerify.js");
var age = prompt("What is your age");

if(age < 18){
	alert("You may not enter");
} 
else if( age < 21){
	alert("you may enter but not drink");
} 
else{
	alert("You may enter and drink");
}