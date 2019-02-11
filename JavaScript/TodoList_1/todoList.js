console.log("todoList.js is connected");
var todos = ["Walk Dog"];

var input = prompt("What would you like to do?")

if(input === "list"){
	console.log(todos);
}else if(input === "new"){
	//ask for new todo
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
}