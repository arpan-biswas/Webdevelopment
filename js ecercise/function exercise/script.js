console.log ("to check a number is even or odd");
//var num = prompt ("type a number to check even or odd in the console"); 

function isEven (num) {
	//if (num % 2 == 0) {
	//	return true;
	//}
	//else return false;
	return num % 2 === 0;
}
console.log ("writing a factorial function");
function fact (x) {
	if (x == 0 ){
		return 1;
	}
		else return x * fact(x-1) ;
}


console.log ("writing a kebabToSnake function");
function kebabToSnake (str) {
	var res = str.replace(/-/g, "_");
	return res;
}