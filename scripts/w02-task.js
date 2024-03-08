/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

//1.Declare and instantiate a variable to hold your name. Identify the variable as "fullName".
let fullName = 'Detzani Santiago'

//2.Declare and instantiate a variable to hold the current year. Identify the variable as "currentYear".
const currentYear = new Date().getFullYear();

//3.Declare and instantiate a variable to hold the file path (location) and file name of the image that you placed in the images folder as a string. Identify the variable as "profilePicture".
const profilePicture = "images/profile.png";

/* Step 3 - Element Variables */
//1.Use the document.getElementById() method to get the HTML element with the id of name and store it in a const variable named "nameElement".
const nameElement = document.getElementById("name");

//2.Use the document.getElementById() method to get the HTML element with the id of food and store it in a const variable named "foodElement".
const foodElement = document.getElementById("food");

//3.Use the document.querySelector() method to get the element with the id of "year" and store it in a variable named "yearElement".
const yearElement = document.querySelector("#year");

//4.Use any viable method to get the profile image element stored into a variable named "imageElement".
const imageElement = document.querySelector("main#home profile img");

/* Step 4 - Adding Content */

//1.Assign the nameElement's innerHTML property the fullName variable value.
//2.Surround the fullName value with <strong> tags.
nameElement.innerHTML = `<strong>${fullName}</strong>`

//3.Use the textContent property to set the value of the element to the value of the variable currentYear.
yearElement.textContent = currentYear;

//4.Use the setAttribute method to set the src property of the image element and set its value to the file path variable set in Step 2.
imageElement.setAttribute("src", profilePicture);

//5.Use the setAttribute method to set the alt property of the image element and set its value to equal 'Profile image of [Insert Name Variable]' where the name variable comes from Step 2. Always use a template literal to create the string.
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

//1.Declare an array variable to hold your favorite foods.
let favoriteFoods = ["Chilaquiles", "Ice Cream", "Hamburgers", "Tacos", "Huaraches", "Pozole"];

// Modify the HTML element with the id of food to display your favorite foods array. 💡Remember that you set a variable named foodElement in Step 3 to reference the element with the id of food.
let foodHtml = favoriteFoods.join(", "); 

// Display the array
document.getElementById("food").innerHTML = foodHtml;

// Declare and instantiate a variable to hold another single favorite food item.
favoriteFoods.push("Elotes"); 

// Add to the foodHtml value with commas
foodHtml = favoriteFoods.join(", ");

// Display the array
document.getElementById("food").innerHTML += "<br>" + foodHtml;

// Remove first element from the array
favoriteFoods.shift();

// Add to the array to foodHtml variable seperated with comma/space
foodHtml = favoriteFoods.join(", ");

// Display the array
document.getElementById("food").innerHTML += "<br>" + foodHtml;

// Remove last element from the array
favoriteFoods.pop();

// Add to the array to foodHtml variable seperated with comma/space
foodHtml = favoriteFoods.join(", ");

// Display the array
document.getElementById("food").innerHTML += "<br>" + foodHtml;






