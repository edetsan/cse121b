/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Addition Feature*/

function add(number1, number2){
    //function body
    const sum = number1 + number2;
    return sum;
}

function addNumbers(){  

    const addNumber1 = Number(document.querySelector("#add1").value);
    const addNumber2 = Number(document.querySelector("#add2").value);

     const sum = add(addNumber1,addNumber2);
     document.querySelector("#sum").value = sum;
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);




/* Subtraction Feature */

const subtract = function (subtract1, subtract2) {
    return subtract1 - subtract2;
    
}

const subtractNumbers = function () {

    let subtractNum1 = Number(document.querySelector('#subtract1').value);
    let subtractNum2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNum1,subtractNum2);
    
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Functions */
/* Multiplication Feature */

const multiply = (factor1, factor2) => {
    return factor1 * factor2;
 }  
   

const multiplyNumbers = () => {

    let multiplyNum1 = Number(document.querySelector('#factor1').value);
    let multiplyNum2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNum1,multiplyNum2);

}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Your Choice */
/* Division Feature */

function divide (dividend, divisor){
    //function body
    const quotient = dividend / divisor;
    return quotient;
}

function divideNumbers () {  

    const dividendNum = Number(document.querySelector("#dividend").value);
    const divosorNum = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(dividendNum,divosorNum);

}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Selection Structures */

//initialize variables

function getTotal() {
    //input
   let subtotal = parseFloat(document.getElementById("subtotal").value);

   //processing
   if (document.getElementById("member").checked) {
       subtotal = subtotal - subtotal * 0.2; // 20% discount
     }
   //output
   document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}
document.getElementById("getTotal").addEventListener("click", getTotal);


const currentDate = new Date().getDate();
const currentYear = new Date().getFullYear();

document.querySelector('#year').value = currentYear;



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */

document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);


/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */

document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);