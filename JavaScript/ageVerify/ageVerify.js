alert("connected to ageVerify.js");
// var age = prompt("What is your age");


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

// not working correctly--------------------------------
function checkAge() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("age").value;

  // If x is Not a Number or less than zero
  while (isNaN(x) || x < 0) {
    text = "Input not valid";
  }
  if(age < 18){
	text = "You may not enter";
	if(age%2 != 0){
		text ="your age is odd!";
	}
	else{
		text ="your age is even";
	}
} 
else if( age < 21){
	text ="you may enter but not drink";
} 
else if( age = 21){
	text ="Happy Birthday you get a free drink";
} 
else{
	text ="You may enter and drink";
} 
  
  document.getElementById("demo").innerHTML = text;
}
