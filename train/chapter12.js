/*function smileyIt(theText) {
    theText += " :)";
    return theText;
}

alert(smileyIt("Hi There!"));
*/

var trainSpeed = 250;
var trainPosition = 0;
var animation;

var train = document.getElementById("train");
var stopButton = document.getElementById("stopButton");

train.addEventListener("click", speedUp);
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
        clearInterval(animation);
        animation = setInterval(frame, trainSpeed);
    }
    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 720) {
        alert("CRASH!");
        consle.log("CRASH!");
        clearInterval(animation);
    }
    if (currentPosition > 720) {
        clearInterval(animation);
        
    }
}

function stopTrain() {
    if (trainPosition < 720) {
        clearInterval(animation);
    }
}

