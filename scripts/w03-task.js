/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    //function body
    return number1 + number2; // return the sum of the two given numbers.
}

function addNumbers () {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value); 
    
    document.querySelector("sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2; //return the difference between the two given numbers
}

function subtractNumbers () {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2

function multiplyNumbers () {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide (number1, number2) {
    return number1 / number2;
}

function divideNumbers () {
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let memberBox = document.getElementById("member");
document.querySelector("#getTotal").addEventListener("click", calculateTotal);

function calculateTotal() {
    let subtotal = document.querySelector('#subtotal').value;

    if (memberBox.checked) {
        let modifier = subtotal * 0.2;
        let total = subtotal - modifier;
        rounded_total = Number.parseFloat(total).toFixed(2);
        document.querySelector("#total").innerHTML =`${rounded_total}`;
        
    } else {
        let modifier = 0;
        let total = subtotal - modifier;
        rounded_total = Number.parseFloat(total).toFixed(2);
        document.querySelector("#total").innerHTML =`${rounded_total}`;
    }
    // I wanted to use 
    //let total = subtotal - modifier;
    //Number.parseFloat(total).toFixed(2);
    //document.querySelector("#total").innerHTML =`${total}`;
    //after the if statement, but couldn't get it to work that way.


}

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number %2 === 1); //every second number starting at position 1, not position 0

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number %2 === 0); 

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number * 2)

/* Output Sum of Multiplied by 2 Array */
doubled = numbersArray.map(number => number * 2)
document.querySelector("#sumOfMultiplied").innerHTML = doubled.reduce((sum, number) => sum + number)
