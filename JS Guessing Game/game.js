var secretNumber =  4;

var guess = prompt("Guess a num");


alert(guess);

if (Number(guess)===secretNumber) {
	alert("Got it right!"); 
}

else if (Number(guess)> secretNumber) {
	alert("Too High");
}

else{
	alert("too loow");
}