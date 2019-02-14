console.log("todoList.js is connected");
var todos = ["Walk Dog"];

var input = prompt("What would you like to do?");
while(input !== "quit"){
	if(input === "list"){
		todos.forEach(function(todo, i){
		console.log(todo + " : " + i);
	});
	}else if(input === "new"){
		//ask for new todo
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
	}else if(input ==="delete"){
		// ask for index of item to delete
		var index = propmt("Enter the index of item to delete.");
		//delete item with matching index
		todos.splice(index,1);
	}
	input = prompt("What would you like to do?");
}
console.log("Quiting the App, Goodbye :)")