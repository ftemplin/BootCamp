console.log("todoList.js is connected");
var todos = ["Walk Dog"];

var input = prompt("What would you like to do?");
while(input !== "quit"){
	if(input === "list"){
		listTodos();
	}else if(input === "new"){
		newTodo();
	}else if(input ==="delete"){
		deleteTodo();
	}
	input = prompt("What would you like to do?");
}
console.log("Quiting the App, Goodbye :)")

function listTodos(){
	todos.forEach(function(todo, i){
	console.log(todo + " : " + i);
});
}
function newTodo(){
	//ask for new todo
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Added item ")
}

function deleteTodo(){
	// ask for index of item to delete
		var index = prompt("Enter the index of item to delete.");
		//delete item with matching index
		todos.splice(index,1);
		console.log("Deleted item ")
}