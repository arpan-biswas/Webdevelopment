var num = 7;
var stringGuess = prompt("whats your guess?");
var guess = Number (stringGuess);

if (guess === num) {
	alert ("bingo, your guess is cool");
}
else if (guess > num){
	alert ("your guess is too high");
}
else if (guess < num){
	alert ("your guess is too high");
}

else alert ("you type some thing else other than number"); 