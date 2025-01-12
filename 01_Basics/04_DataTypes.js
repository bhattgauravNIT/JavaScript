/**
 * Java script has primitive as well as non primitives data types:
 * 
 * Primitives: They are called by values
 * 
 * string
 * number
 * bigInit
 * boolean
 * undefined
 * symbol
 * null
 * 
 * 
 * Non primitives: They are called by reference
 * 
 * object
 * Array
 * functions 
 * 
 */

let a = "Gaurav";
let b = 3;
let c = BigInt(10);
let d = true;
let e; // e is declared but never initialized and thus its undefined as its value is not defined
let f = null; // this means f is empty and has no value

let id1 = Symbol('123');
let id2 = Symbol('123');

console.log(id1 === id2) // false as symbol is used to make things unique no matter even if same values are being passed.


console.table([a, b, c, d]);
console.log(typeof undefined) // undefined
console.log(typeof null) // object

/**Its an object and typeOf obj is obj itself */
let obj = {
    name: "Gaurav",
    age: 23
}
console.log(typeof obj); // obj


let addFunc = function addNumberS(a, b) {
    return a + b;
}
console.log(typeof addFunc); // function

let arr = [1,2,3]; 

console.log(typeof arr) // obj

/**
 * The main difference between null and undefined is undefined means 
 * the value is not defined yet but its data type
 * is itself undefined
 * 
 * whereas null means void or nothing or empty and doesn't means its not defined.
 *  Its type is an object.
 */