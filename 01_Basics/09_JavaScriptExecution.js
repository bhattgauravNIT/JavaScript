/**Entire end to end javascript execution explanation:*/
let num1 = 2;
let num2 = 3;

function addNumbers(num1, num2) {
    return num1 + num2;
}

let res1 = addNumbers(num1, num2);
let res2 = addNumbers(3, 7);

/**
 * Javascript execution happens in javascript execution context which is composed of 
 * 1. Global execution context
 * 2. Functional execution context
 * 
 * Global execution context is different for js executed on browser (window object) and is different from execution in node (global object)
 * 
 * In each of these context there composed of two things:
 * 1. Memory Creation phase
 * 2. Execution phase
 * 
 * So first in memory creation phase for above code.
 * 
 *          num1 is hoisted to top of its scope assigned in memory and send to temporal dead zone as its a let.
 *          They are not accessible until the code reaches their declaration.
 * 
 *          same happens with num2.
 * 
 *          The function addNumbers is hoisted with its definition
 *          
 *          res1 and res2 are hoisted and send into TDZ like num1 and num2.
 * 
 * Now comes the execution phase.
 *        
 *         num1 reaches its declaration and gets assigned with value 2
 *         num2 reaches its declaration and gets assigned with value 3
 * 
 *         function addNumber was already hoisted with its definition.
 * 
 *         res1 was called as return from function addNumber thus now function addNumber needs to be executed
 *         and thus function addNumbers is pushed to call stack.
 * 
 *         Now for addNumbers again two process happen just like two process of memory creation and execution happened for 
 *         GEC or global execution context
 * 
 *         **in memory creation phase num1 and num2 which are function parameters gets hoisted and the arguments passed to
 *         function gets assigned with value of num1 and num2.
 *        
 *         After than execution happens and sum of num1 and num2 is returned.
 *         
 *         Once its complete for addNumbers its execution context is destroyed and function is
 *         taken out from call stack and value it returns gets assigned to res1.
 * 
 *         Now  res2 was called as return from function addNumber thus now function addNumber needs to be executed
 *         and thus function addNumbers is pushed to call stack.
 *         
 *         Now for addNumbers again two process happen just like two process of memory creation and execution happened for 
 *         GEC or global execution context
 *  
 *         Once its complete for addNumbers its execution context is destroyed and function is
 *         taken out from call stack and value it returns gets assigned to res2.
 * 
 */



/**
 * Let's understand call stack concept in js with help of an example.
 */

function one() {
    console.log(`Inside function one`);
}

function two() {
    console.log(`Inside function two`);
}

function three() {
    console.log(`Inside function three`);
}

one();
two();
three();

/**
 * So javascript executes line by line,
 * so first it came to one() and sees that its being called so one() came inside the function call stack and gets executed,
 * since execution of one() is completed so its being removed from function call stack and then two() is inserted in call stack
 * after two() is completed then three() is pushed to call stack and then once executed is pushed out from call stack.
 * This call stack is known as functional call stacks and takes care of the function execution schedule.
 * 
 */
