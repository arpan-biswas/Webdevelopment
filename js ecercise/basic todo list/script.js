var todos = ["Hello"];

var input = prompt("What would you like to do?");

	while (input !== "quit") {
		//manage input

		if (input === "list") {
		console.log(todos);
		}
		else if (input === "new"){
		//ask for new todo
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
		}
		//ask againt for input
		input = prompt("What would you like to do?");
	}
	console.log("Okay, you are running away from the console! Nice");