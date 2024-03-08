/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "John Boger";

let currentYear = 2024;

let profilePicture = "images/dolphin_statue.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");

const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year"); 
/* The # selector string is used to indicate the id attribute value for querySelector. */

let imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

let yearText = document.getElementById("year").textContent;

imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFoodsArray = ["strawberries", "apples", "apple pie", "chicken power bowls", "spaghetti", "teriyaki chicken", "orange jello"];
document.getElementById("food").innerHTML = favoriteFoodsArray.toString();


let singleFavoriteFoodItem = "lettuce";
favoriteFoodsArray.push(singleFavoriteFoodItem);

foodElement.innerHTML += `<br>${favoriteFoodsArray}`;

favoriteFoodsArray.shift();
foodElement.innerHTML += `<br>${favoriteFoodsArray}`;

favoriteFoodsArray.pop();
foodElement.innerHTML += `<br>${favoriteFoodsArray}`;

