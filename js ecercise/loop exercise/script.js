
console.log("Numbers between -10 to 19");
for (var num = -10; num<=19;num++ ){
	console.log(num);
}
console.log(" Even numbers between 10 to 40");
//var num = 10;
//while (num<=40) {
//	if (num % 2 === 0)
//	console.log(num);
//	num++;
//}

for (var num = 10; num<=40; num++ ){
	if (num % 2 === 0) {
		console.log(num);
		num++;
	}
}	

console.log(" Odd numbers between 300 to 333");
for (var num = 300; num<=333; num++ ){
	if (num % 2 !== 0) {
		console.log(num);
		num++;
	}
}	
//var num = 300;
//while (num<=333) {
//	if (num % 2 !== 0)
//	console.log(num);
//	num++;
//}

console.log("Numbers between 5 to 50 divisible by 5 and 3");
for (var num = 5; num<=50; num++ ){
	if (num % 3 == 0 && num % 5 == 0) {
		console.log(num);
		num++;
	}
}

//var num = 5;
//while (num<=50) {
//	if (num % 3 == 0 && num % 5 == 0)
//	console.log(num);
//	num++;
//}




