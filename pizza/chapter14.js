/*let language = prompt("What language do you speak? ").toLowerCase();

if (language === "javascript") {
    alert("Great! Let's talk JavaScript!");
    var speaksJavaScript = true;
} else {
    alert("I don't understand what you're saying");
}

if (speaksJavaScript) {
    alert("It's great to meet you");
}

if ((deliveryCity === "Anytown") && (orderPrice > 10) || (birthday === "yes")) {
    var deliveryPrice = 0;
} else {
    var deliveryPrice = 5;
}
*/

// listen for button clicks
document.getElementById("placeOrder").addEventListener

    ("click", placeOrder);

/**
* gets form values
* calculates prices
* produces output
*/
function placeOrder() {
    // get form values
    var numPizzas =

        document.getElementById("numPizzas").value;

    var typePizza =

        document.getElementById("typePizza").value;

    var deliveryCity =

        document.getElementById("deliveryCity").value;

    var birthday =

        document.getElementById("birthday").value;

    // get the pizza price
    var orderPrice = calculatePrice(numPizzas, typePizza);

    // get the delivery price
    var deliveryPrice = calculateDelivery(orderPrice,

        deliveryCity, birthday);

    // create the output
    var theOutput = "<p>Thank you for your order.</p>";
    // output the delivery price, if there is one
    if (deliveryPrice === 0) {
        theOutput += "<p>You get free delivery!</p>";
    } else {
        theOutput += "<p>Your delivery cost is: $" +

            deliveryPrice;

    }
    theOutput += "<p>Your total is: $" + (orderPrice +

        deliveryPrice);
    // display the output
    document.getElementById("displayTotal").innerHTML =

        theOutput;

}
/**
* calculates pizza price
*/
function calculatePrice(numPizzas, typePizza) {
    var orderPrice = Number(numPizzas) * 10;
    var extraCharge = 0;
    // calculate extraCharge, if there is one
    if (typePizza === "supreme") {
        extraCharge = Number(numPizzas) * 2;
    }
    orderPrice += extraCharge;
    return orderPrice;
}
/**
* calculates delivery price
*/
function calculateDelivery(orderPrice, deliveryCity,

    birthday) {
    var deliveryPrice = 0;
    // calculate delivery price, if there is one
    if (((deliveryCity === "Anytown") && (orderPrice >

        10)) || (birthday === "yes")) {

        deliveryPrice = 0;
    } else {
        deliveryPrice = 5;
    }
    return deliveryPrice;
}