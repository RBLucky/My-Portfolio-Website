/*let dayOfWeek = prompt("Enter your favorite day of the week: ").toLowerCase();

let theResponse;

switch (dayOfWeek) {
    case "monday":
        theResponse = "Ack!";
        break;
    case "tuesday":
        theResponse = "Taco day!";
        break;
    case "wednesday":
        theResponse = "Halfway there!";
        break;
    case "thursday":
        theResponse = "It's the new Friday!";
        break;
    case "friday":
        theResponse = "TGIF! Yeah!";
        break;
    case "saturday":
        theResponse = "What a day!";
        break;
    case "sunday":
        theResponse = "Sunday = Funday!";
        break;
    default:
        theResponse = "I haven't heard of that one!";
        break;
}

alert(theResponse);
*/

let todayDate = document.getElementById("todaysdate");
let todoButton = document.getElementById("whattodo");
let thingToDo = document.getElementById("thingToDo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
var d = new Date();
//d.setDate(11);

// call the displayDate() function
displayDate();

function displayDate() {
    // todo: display the current date in the todaysdate div
    todayDate.innerHTML = d.toDateString();
}

function displayActivity() {
    // todo: find out the day of the week.
    let dayOfWeek = d.getDay();

    /* todo: set a variable, called youShould, with a different
       string based on what day of the week it is. */
    let youShould;

    // todo: output the value of youShould into the thingToDo div

    switch (dayOfWeek) {
        case 0:
            youShould = "Take it easy";
            break;
        case 1:
            youShould = "Sleep";
            break;
        case 2:
            youShould = "Eat something you enjoy";
            break;
        case 3:
            youShould = "Go for a run";
            break;
        case 4:
            youShould = "Play a game you haven't played in a long time";
            break;
        case 5:
            youShould = "Go shopping! (or window shopping)";
            break;
        case 6:
            youShould = "Bake something you've never baked before";
            break;
        default: "No such day";
            break;
    }
    thingToDo.innerHTML = youShould;
}

