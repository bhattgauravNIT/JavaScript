/**
 * Pass n number of arguments to a function and return the sum of all of them.
 * 
 * This can be done with the help of rest operators.
 */

function addNumbers(...nums) {
    let sm = 0;
    for (let val of nums) {
        sm += val;
    }
    return sm;
}

// console.log(addNumbers(1, 2, 3, 4, 5));


/**
 * Treating functions like variables
 */

let addMultiNumbers = function (...nums) {
    let sm = 0;
    for (let val of nums) {
        sm += val;
    }
    return sm;
}

// console.log(addMultiNumbers(1, 2, 3, 4, 5));


/**
 * Difference between normal function function declaration and using variable to hold the function is 
 * 1. Syntax is different
 * 2. Normal function undergoes hoisting i,e if i say 
 * 
 * addNumbers(1,2,3);
 * function addNumbers(...nums) {
    let sm = 0;
    for (let val of nums) {
        sm += val;
    }
    return sm;
}
    Clearly we have called the function first and then declared it, since function are hoisted and thus there was no issue.
    Hoisting means taking the declaration to top of the their scope.

    3. Variable associated function works based upon the scope of hoisting of the variable type used ex: var, let or const.
    See different cases for better understanding.
 */

/**
 * Case1:
 */

// console.log(normal(2, 3)); // no problem
function normal(a, b) {
    return a + b;
}


/**
 * Case2:
 * This will have error fun is not defined because after hoisting the code will look like
 * var fun;
 * console.log(fun(2,3))
 * fun = function (a, b) { 
    return a + b; 
}; 
    Clearly error is thrown in line 2 console.log(undefined(2,3));
 */

// console.log(fun(2, 3)); 
var fun = function (a, b) {
    return a + b;
}


/**
 * Case3:
 * Using let and const
 * Let and const are also hoisted just like var however they remain in Temporal dead zone and are not initialized
 * till its declaration is encountered in code.
 * So when code comes to console.log(fun1), fun1 was present in temporal dead zone and was not initialized and thus error will be 
 * thrown that can't access fun1 before initialization. 
 */

// console.log(fun1(2, 3, 4));
let fun1 = function (...num) {
    return num
}


/**
 * Closures:
 * In cases of having function inside a function,
 * the inner function will have access to the variables of outer function as for inner function these variables of
 * outer function has global scope but the outer function can not have access to variables of inner function as
 * the inner function variables has block scope.
 */

function one() {
    let variableOne = "outerVariable";
    function two() {
        let variableTwo = "innerVariable";
        console.log(variableOne);
    }
    two();
    console.log(variableTwo); // problematic as this is inner variable and has only block scope within function two.
}

// one();


/**
 * Function inside an object and this keyword
 * 
 * function which is used as value to property welcome of obj is an anonymous function as its without any name.
 * 
 * In obj the context is having property like name, email.
 * this keyword refers to the current instance of obj or the current context of obj.
 */

let obj = {
    name: "Gaurav",
    email: "xyz@abc.com",
    welcome: function () { // its an anonymous function i,e without any name
        return `Hello ${this.name}`;
    }
}

// console.log(obj.welcome());


/**
 * This keyword in browser vs this keyword in node env
 * 
 * console.log(this) gives the current context.
 * 
 * In browser the current context or the current instance is the window so window object is shown where as in node env
 * the current context or current instance in an empty object. 
 */

// console.log(this);

function thisTesting() {
    const userName = "gaurav";
    console.log(this); // gives a lot of global object prop associated with function but does not include any kind of variables associated with function
    console.log(this.userName); // undefined as we can only get props of objects through this and not of functions.
}

// thisTesting();



/**
 * Arrow functions
 */

let arrow = () => {
    let name = "gaurav";
    console.log(this.name); // undefined same concept as that of a normal function
    return `we are using arrow function`;
}

/**
 * Case: Implicit return arrow function
 * 
 * if we only have one liner logic then we can use () and avoid return statement
 * however if we use {} then a return statement is must.
 */

let arrow1 = (num1, num2) => (num1 + num2);


/**
 * IIFE (Immediately invoked function executions)
 * 
 * IIFE are self executed functions and since variables declared inside the scope of the function (let & const),
 * will have scope within it so IIFE are used to avoid global variables pollutions, and used in scenarios where
 * the function need to be invoked immediately.
 */

(function IIFE() { // named IIFE
    console.log(`IIFE syntax as normal function`);
})();

/**IIFE syntax as arrow function */

(() => {
    console.log(`IIFE syntax for arrow function`)
})();

/**IIFE syntax for implicit return arrow function */

(() => (console.log(`IIFE syntax for implicit returned arrow function`)))();

/**IIFE syntax with function parameters */

((name) => {
    console.log(`Hello my name is ${name}`);
})("Gaurav");



/**
 * Callback functions:
 * 
 * A callback function is a function that is passed as an argument to another function 
 * and is intended to be executed later or immediately, either synchronously or asynchronously.
 * 
 */


/**
 * Here the arrow function passed inside as an argument to forEach is a callback function. 
 */
let arr = [1, 2, 3, 4, 5];
arr.forEach((val) => {
    console.log(val);
})

function print(val) {
    console.log(val);
}

// arr.forEach(print); // passed reference of a callback function print inside for each

/**
 * Here the callback function of print which is passed as an argument to forEach function is executed immediately
 * in a synchronous way, that is code is getting executed for print and don't have to wait to print to get completed.
 * 
 * We can also take an example of asynchronous callback.
 * 
 * So returnResp takes a callback function which it calls back once it completes its execution.
 * so we call returnResp with callback function (the function which returnResp needs to callBack) once its completes
 * execution and is getResponse.
 * 
 * So once in 2 secs returnResp complete execution, it call back to getResponse and thus the o/p is
 * 
 * Call callback function after 2 secs
 * Call back function called successfully
 */

function returnResp(callback) {
    setTimeout(() => {
        console.log("Call callback function after 2 secs");
        callback();
    }, 200)
}

function getResponse() {
    console.log("Call back function called successfully");
}

returnResp(getResponse);



let obj1 = [
    {
        language: "JS",
        description: "Javascript"

    },
    {
        language: "Java",
        description: "Java"

    },
    {
        language: "python",
        description: "py"

    }
]

for (let val of obj1) {
    console.log(`${val.language} has description ${val.description}`);
}