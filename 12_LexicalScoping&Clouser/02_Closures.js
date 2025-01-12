/**
 * In this use case, inner function is inside the outer function, and due to lexical scoping it has access to
 * the scope members of the outer function.
 * 
 * Now outer function actually returns the inner function reference.
 * 
 * So when we say 
 * 
 * myFunc = outerFunction();
 * 
 * so myFun goes reference of innerFunction and after this line, the functional execution context
 * of outer function gets destroyed from the stack.
 * 
 * Now when we called myFunc how it gave me the name variable as name variable was in scope of
 * outer function whose execution context has ended.
 * 
 * the reason behind this is when inner function is returned, the entire
 * lexical scope of the inner function as well as entire lexical scope of the outer function is also
 * present thus inner function still has access to scope member of outer function and this phenomena is called
 * as closer.
 * 
 * A closure in JavaScript is a feature that allows a function to "remember" and 
 * access its lexical scope (the scope in which it was declared) even when the function is executed outside that scope.
 */

function outerFunction() {
    let name = "Gaurav";
    function innerFunction() {
        return name;
    }
    return innerFunction;
}

let myFunc = outerFunction();
console.log(myFunc());