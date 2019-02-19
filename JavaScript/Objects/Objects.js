alert("Connected to Objects.js")

// Create a new object called someObject
var someObject = {};
// add a attribute of _name to the object and a value of Hedwig
someObject._name = "Hedwig";
//Add a new attribute of age with a value of 6
someObject.age = 6;
// adding a new attribute of color and a value of red
var prop = "color"
someObject[prop] = "red";

// create a object with nested properties

var someObject = {
	friends: [
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"}
		],
	color: "baby blue",
	isEvil: true
};
// Write code to select the property Malfoy
someObject.friends[0].name

//Create an array movies with nested objects
var movies = [
    {
		title: "In Bruges",
		hasWatched: true,
		rating: 5
    },
    {
		title: "Frozen",
		hasWatched: false,
		rating: 3.5
    }
    ]

    // Console log tyhe list of objects and a statement of watched or not seen
    movies.forEach(function(movie){
var result = "you have ";
if(movie.hasWatched){
result += "watched ";
console.log
}else {
result += "not seen ";
}
result += "\"" + movie.title + "\" ";
result += movie.rating + " stars"; 
console.log(result)
})