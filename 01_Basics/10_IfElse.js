/**
 * The condition inside if is evaluated as either a true value or a false value.
 * However we can also evaluate truthy or falsy values.
 * 
 * There are some specific things which are considered as falsy 
 * like
 * 
 * "", 0, -0, 0n, null, Nan, undefined, false
 * rest are considered as truthy value.
 */

let userName = "g@bhatt"
if (userName) {
    console.log(`Username evaluated to truthy`);
}


/**Switch case */
switch (userName) {
    case "g@bhatt":
        console.log(`Found Username : ${userName}`);
        break;
    case "panda@abc":
        console.log(`Found Username : ${userName}`);
        break;
    default:
        console.log("woooo");
}


/**
 * The nullish coalescing operator (??) 
 * 
 * It is a logical operator that provides a way to assign a default value to a variable when the original value is null or undefined.
 */

let val = null;
val = null ?? 10;
// console.log(val);


/**
 * Ternary operator
 */

let val1 = 3 >= 3 ? 'yes' : 'false';