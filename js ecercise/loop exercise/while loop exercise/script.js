var num = -10;
console.log("Numbers between -10 to 19");
while (num<=19) {
	console.log(num);
	num++;
}
console.log(" Even numbers between 10 to 40");
var num = 10;
while (num<=40) {
	if (num % 2 === 0)
	console.log(num);
	num++;
}

console.log(" Odd numbers between 300 to 333");
var num = 300;
while (num<=333) {
	if (num % 2 !== 0)
	console.log(num);
	num++;
}

console.log("Numbers between 5 to 50 divisible by 5 and 3");
var num = 5;
while (num<=50) {
	if (num % 3 == 0 && num % 5 == 0)
	console.log(num);
	num++;
}




