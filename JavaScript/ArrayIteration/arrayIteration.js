console.log("connected to array iteration")

//---------Colors iteration function----------------
// for(var i = 0; i < colors.length; i++){
// 	console.log(colors[i]);
// }

// colors.forEach(function(color){
// 	console.log("the color " + color);
// });
//-------------------------------------------

//
// write a function to print reverse for a given set of array 
//items 1,2,3,4. Print them out as 4,3,2,1

function printReverse(arr){
	for(var i = arr.length -1; i >= 0; i--){
		console.log(arr[i]);
	}
}

printReverse([1,2,3,4,5])


//**** isUniform starts here
//Write a function isUniform() which takes ana array as an argument and returns 
//true if all elements in the array are identical
//isUniform ([1,1,1,1]) = true
//isUniform ([2,1,1,1,]) = false

function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
			}
		}
		return true;
}

//var x = array [0]
// while array[i].value != " "
// if 


// sumArray()
//Write a function sumArray() that accepts an array of 
//numbers and returns the sum of all numbers in the array.

function sumArray(arr){
	var total = 0
	arr.forEach(function(element){
		total += element;
	});
	return total;
}

 // max()
 //Write a function max() that accepts an array of numbers 
 //and returns the maximum number in the array

