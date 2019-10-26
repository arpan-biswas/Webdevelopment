console.log("return the reverse of the array");

function reverse (arr) {
	for (var i= arr.length-1; i >= 0; i-- ){
		console.log(arr[i]);	
	}
}


reverse([1,2,3,4])

console.log ("check Uniform ");

function isUniform(arr) {
	var first = arr[0];
	for (var i = 1; i <= arr.length; i++){
		if (arr[i] !== first) {
			return false;
			}
		}
	return true;
}

console.log("sum of an array")

function sumArray(arr) {
	var sum= 0;
	for (var i = 0; i <= arr.length; i++){
		sum = sum + i ;
	}
	return sum;
}

console.log ("Max element of an array");

function max(arr) {
	var first = arr[0];
	for (var i = 1; i < arr.length; i++){
		if (arr[i] > first) {
			first = arr[i];
			}
		}
	return first;
}



