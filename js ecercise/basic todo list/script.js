var todos = ["Hello"];

var input = prompt("What would you like to do?");

	while (input !== "quit") {
		//manage input

		if (input === "list") {
			listTodos();
		}
		else if (input === "new"){
		//ask for new todo
			addTodo();
		}
		else if (input === "delete") {
			delTodo();
		}
		//ask againt for input
		input = prompt("What would you like to do?");
	}
	console.log("Okay, you are running away from the console! Nice");

	function listTodos(){
		console.log("*****************")
		todos.forEach(function(todo, index){
			console.log(index+ ": " + todo);
			})
		console.log("*****************");
	}

	function addTodo(){
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
		console.log("A todo has been added");
	}

	function delTodo(){
		//ask for index to deleted
		var index = prompt("Enter index of todo to delete");
		//delete that todo
		todos.splice(index,1);
		console.log("Deleted Todo");
	}