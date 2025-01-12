/**
 * Lexical scoping in js is defined as the concept in which
 * the scope members of the outer function is available to the inner function as well. 
 * 
 * In js in global execution context once a function is called it gets loaded in the execution context
 * and since in this case innerFunction is getting called from outerFunction thus, innerFunctions execution
 * context will also get loaded on top of outerFunction executional context.
 * 
 * This inner function's executional context also shares the memory of its outer parent function and thus
 * have access to its scope members as well.
 * 
 * This concept is lexical scoping.
 */

function outerFunction() {
    let name = "Gaurav";
    function innerFunction() {
        console.log(name);
    }
    innerFunction();
}

outerFunction();

