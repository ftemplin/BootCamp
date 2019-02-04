alert("connected to ageVerify.js");
var age = prompt("What is your age");


while(isNaN(age) || age < 0){
	alert("error with age")
	age = prompt("What is your age")
}
if(age < 18){
	alert("You may not enter");
	if(age%2 != 0){
		alert("your age is odd!")
	}
	else{
		alert("your age is even")
	}
} 
else if( age < 21){
	alert("you may enter but not drink");
} 
else if( age = 21){
	alert("Happy Birthday you get a free drink");
} 
else{
	alert("You may enter and drink");
}