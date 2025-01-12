/**
 * In js whenever a function is called its taken into a call stack and then its execution happens,
 * once its execution gets completed its taken out of the call stack and its function execution ends there along with its execution 
 * scope.
 * 
 * Now lets suppose i have a scenario in which i am setting some properties , however on one of the
 * property i need to call another function which sets this property,
 * as soon as the subFunction call is complete, its taken out of call stack and its execution context ends, thus
 * we will not be able to set the that property.
 * 
 * This scenario is handled by call.
 */

function setUserName(userName) {
    this.userName = userName;
}

function setDetails(userName, email, mobileNumber) {
    setUserName(userName);
    this.email = email;
    this.mobileNumber = mobileNumber
}

const res = new setDetails("Gaurav", "bhatt@we.com", 98656789876);
console.log(res); // userName will not be there

/**
 * 
 *The problem can be solved via call 
 */
function setUserName1(userName) {
    this.userName = userName;
}

/**
 * 
 * here we have passed our execution context of setDetails1 function to setUserName1 function
 * as soon as setUserName1 gets executed and its function execution ends , still since it was working
 * with execution context of setDetails, so setDetails will now have its userName
 * 
 * So we use a call when we need to invoke the function immediately with a specific context.
 */
function setDetails1(userName, email, mobileNumber) {
    setUserName1.call(this, userName);
    this.email = email;
    this.mobileNumber = mobileNumber
}

const res1 = new setDetails1("Gaurav", "bhatt@we.com", 98656789876);
console.log(res1);



/**
 * Call and bind both are used to pass a specific execution context to some other function.
 * However we use call when we need to immediately invoke the other function with a specific execution context.
 * 
 * We use bind when we need to invoke a function with a specific execution context later say during some event.
 */


/**
 * Here constructor is having an current execution context in which userName is there,
 * but handleClick is not having the current execution context where userName is present
 * since we don't need to invoke the function handleClick immediately and only once the button is clicked
 * i,e on click event thus its an classic case of bind, if we would have need to immediately invoke the handleClick
 * function we would have used call, however in this case we need bind.
 */
class Bind {
    constructor() {
        this.userName = "Gaurav";
        // document.querySelector('#btn').addEventListener('click', this.handleClick); // this will result in undefined userName
        document.querySelector('#btn').addEventListener('click', this.handleClick.bind(this));
    }

    handleClick() {
        console.log(`Button clicked by ${this.userName}`);
    }
}

let obj = new Bind();
