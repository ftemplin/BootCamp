alert("connected to function.js")

function myFunction (){
	alert("myfunction");
	document.write("Hello World!");
	document.write("Have a nice day!");
}

// function square (){
// 	alert("Square function executed");
// 	// var num = document.querySelector('numberInput').value
// 	// var result = square(num);
// 	// document.getElementById("demo").innerHTML = "result";
// 	document.write("your number is" + result.value;
// }

// var num = 10;
// var squared = square(num)

function square (num){
	alert("Square Function");
	return num*num;
	// var num = document.querySelector('numberInput').value
	// document.write(num);
	// document.write("Have a nice day!");
	}

// Even Function---------------------------------------------------

function even(num){
	if(num % 2 === 0){
		return true;
	}else{
		return false;
	}
}

// factorial (4) = 4 X 3 X 2 X 1 ---------------------------------------------
function factorial (num){
	// define a result variable
	var result = 1;
	//calculate factorial and store value in result
	for(var i =2; i <= num; i++){
		result = result * i;
		// Shortened result *=i;
		}
		//return the result variable
		return result;
	}
// Find and Replace function---------------------------------------------
	function findReplace(str){
		//replace one cahracter with another
		var newStr = str.replace(/-/g, '_');
		return newStr;
	}

// Find replace str
function myFunction() {
  var str = document.getElementById("demo").innerHTML; 
  var res = str.replace("Microsoft", "W3Schools");
  document.getElementById("demo").innerHTML = res;
}



//Capitalization function ----------------------------------------------
// function capitalize(str){
// 	// Check to make sure input is a string
// 	if(typeof str === "number"){
// 		return "thats not a string"
// 	}
// 	return str.chartAt(0).toUpperCase() + str.slice(1);
// }

// var city = document.querySelector('wordInput')
// var capital = capitalize(city);

// var city = "paris";
// var capital = capitalize(city);

// var num = 37;
// var capital = capitalize(num);



// W3cSchools Demo (Not working)-------------------------
// document.getElementById("demo").innerHTML = 5 + 6;


// StackOverFlow (not working)-------------------------------
// var titleInput  = document.getElementById("title");
// var display2letter  = document.getElementById("display2letter");
// var display3letter  = document.getElementById("display3letter");

// function clearAndShow () {
//     // Split input box value by comma
//     titles = titleInput.value.split(",");

//     // Reset display divs
//     display2letter.innerHTML = "";
//     display3letter.innerHTML = "";

//     // Cache length so it's not recalculated on each iteration.
//     var len = titles.length;
//     var twoletter = [];
//     var threeletter = [];

//     for (i = 0; i < len; i++) {
//         // Check for a-z, A-Z, length 2 or 3
//         if (!titles[i].match(/^[a-zA-Z]{2,3}$/)) {
//             throw new Error("Please use only alphabet letters.");
//             break;
//         }

//         // Dump into storage arrays.
//         if(titles[i].length == 2) {
//                 twoletter.push(titles[i]);
//         }
//         else {
//             threeletter.push(titles[i]);
//         }
//     }

//     display2letter.innerHTML += "Titles, 2 letters: " + twoletter.join(", ") + "<br/>";
//     display3letter.innerHTML += "Titles, 3 letters: " + threeletter.join(", ") + "<br/>";
// }