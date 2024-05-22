var secret = Math.floor(Math.random()*20);

/*if (guess === 7) {
    alert("Correct!")
} else {
    alert("Sorry, incorrect guess!")
}*/

while (parseInt(guess) !== secret) {
    var guess = prompt("Please guess the secret number (between 1 & 20)");
    if (guess === null) {
        alert("You quit. Try again later")
        break;
    }
    if (guess == secret) {
        alert("Correct!");
        break;
    } else if (guess < secret) {
        alert("Incorrect guess! Too low");
    } else if (guess > secret) {
        alert("Incorrect guess! Too high")
    }
}

