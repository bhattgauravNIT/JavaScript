/**
 * Hoisting is a behavior where variable and function declarations are moved to the top of their scope during the compilation phase,
 * before the code is executed. This means you can use variables or call functions before they are declared in the code.
 * 
 * However different dataTypes have different properties like:
 * 
 * 1. var type - its declaration is hoisted and not the value at top of the scope and its value is initialized with undefined
 * 
 * 2. let type - its declaration is hoisted at top of the scope and are not initialized and accessing them before declaration result in reference error
 *               as they are placed in temporal dead zone and are not accessible to compiler before its initialization in execution phase
 * 
 * 3. const type - its declaration is hoisted at top of the scope and are not initialized and accessing them before declaration 
 *                 result in reference error as they are placed in temporal dead zone and are not accessible to compiler before its initialization in execution phase
 */

console.log(hoistVar); // undefined and no reference error
var hoistVar = 10;

console.log(hoistLet); // reference error
let hoistLet = 10;

console.log(hoistConst); // reference error
const hoistConst = 10;



/**Functions are also hoisted before their declaration so we can call a function even before its declared */
greet();

function greet() {
    console.log("Hello, world!");
}


/**Datatypes when used as functional expressions are also treated as same based on hoisting rules for var, let and const */

console.log(foo); // undefined 
var foo = function () {
    console.log("Hi!");
};

console.log(bar); // ReferenceError
let bar = function() {
  console.log("Hi!");
};


/**
 * Lets understand why hoisting happens.
 * 
 * So there are two phases one is compilation and other is execution.
 * 
 * During compilation all variables are hoisted so for example say our code is:
 * 
 *                                  console.log(a);
                                    var a = 10;

                                    console.log(b);
                                    let b = 20;

                                    hello();
                                    function hello() {
                                    console.log("Hello, world!");
                                    }



   Now compilation phase will happen and everything will be hoisted

   // During compilation phase:
                                    var a;           // Hoisted and initialized with undefined
                                    let b;           // Hoisted but uninitialized (in temporal dead zone)
                                    function hello() {
                                    console.log("Hello, world!");
                                    }



   // During execution phase:
                                    console.log(a);  // undefined
                                    a = 10;

                                    console.log(b);  // ReferenceError (b is in Temporal dead zone)
                                    b = 20;

                                    hello();         // "Hello, world!"


   So to summarize, during compilation phase all the functions and variables declarations are hoisted.
   var and other functions are taken to top of scope
   let and const are taken to temporal dead zone.

   Now in case of var its hoisted by taken to top of scope and initialized with value undefined,
   in case of let and const its hoisted by taken to temporal dead zone and not initialized.

   Now when console.log(a) comes , compiler sees it is present and it was hoisted with value undefined 
   so undefined gets printed.
   
   Now a gets set to 10.

   Now compiler see console.log(b), compiler can't find it as its hoisted and present in temporal dead zone and thus reference error comes up
 */

