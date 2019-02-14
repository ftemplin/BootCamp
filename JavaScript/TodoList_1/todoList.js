console.log("todoList.js is connected");
var todos = ["Walk Dog"];

var input = prompt("What would you like to do?");
while(input !== "quit"){
	if(input === "list"){
		todos.forEach(function(todo){
		console.log(todo);
	});
	}else if(input === "new"){
		//ask for new todo
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
	}
	input = prompt("What would you like to do?");
}
console.log("Quiting the App, Goodbye :)")