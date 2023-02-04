// Used mdn to research arrow functions, and switch statement
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

let userInputOne = Number(prompt("Please enter your first number"));
let userInputTwo = Number(prompt("Please enter your second number"));
let operation = prompt(`What operation would you like to do with these?

    Options: add, subtract, division, or multiply`);

let add = (inputOne, inputTwo) => {
    return inputOne + inputTwo;
}

let subtract = (inputOne, inputTwo) => {
    return inputOne - inputTwo;
}

let divide = (inputOne, inputTwo) => {
    return inputOne / inputTwo;
}

let multiply = (inputOne, inputTwo) => {
    return inputOne * inputTwo;
}

switch (operation.toLowerCase()) {
    case 'add':
        let addTogether = add(userInputOne, userInputTwo);

        console.log(`${userInputOne} + ${userInputTwo} = ${addTogether}`);
        break;
    
    case 'subtract':
        subtract(userInputOne, userInputTwo);

        let subtractTogether = subtract(userInputOne, userInputTwo);

        console.log(`${userInputOne} - ${userInputTwo} = ${subtractTogether}`);
        break;
    
    case 'division':
        divide(userInputOne, userInputTwo);

        let divideTogether = divide(userInputOne, userInputTwo);

        console.log(`${userInputOne} / ${userInputTwo} = ${divideTogether}`);

        break;
    
    case 'multiply':
        multiply(userInputOne, userInputTwo);

        let multiplyTogether = multiply(userInputOne, userInputTwo);

        console.log(`${userInputOne} * ${userInputTwo} = ${multiplyTogether}`);

        break;

    default:
        break;
}

/*
    Thinking
        All normal functions converted to an arrow function. 

        1. This program takes several inputs from the user, does a calculation on them and prints them out to the console. 
        2. First, two numbers are requested from the user, and stored in userInputOne and userInputTwo respectively.
        3. Next, we ask the user what they want to do with these values. The answer is stored in a variable called "operation". I
        added the following line 'Options: add, subtract, division, or multiply` into the program to guide the user what they should do.
        4. Next, we create four functions: each does a specific calculation - addition, subtraction, division, and multiplication. Each function has two parameters: 'inputOne' and 'inputTwo'.
        5. We move onto a switch statement. Based on the value of the variable 'operation' only a specific function is called with the arguments from userInputOne, and userInputTwo. I've used the .toLowerCase() method here just in case the user capitalizes the type of operation they would like to carry out.
        6. The result is calculated and printed out to the console. 
*/