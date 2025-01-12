/**
 * 
 * Summary Table
 * 
   Feature	                 var	                         let	                               const

   Scope	            Function or global scope	     Block scope	                           Block scope
   Hoisting      	    Hoisted with undefined	       Hoisted but not initialized(TDZ)	       Hoisted but not initialized(TDZ)
   Re-declaration	    Allowed	                       Not allowed	                           Not allowed
   Re-assignment	    Allowed	                       Allowed	                               Not allowed
   Global Property	  Becomes a global property	     Does not become a global property	     Does not become a global property
 */


/**
 * 1. Scope difference:
 * 
 * var has a function/global scope where as let and const are having block scope only.
 * 
 * So a is defined inside a block but still its having a block and global scope thus we can print a, 
 * however b and c are let and
 * const respectively and thus its having block scope only and are not accessible outside the block.
 */

if (true) {
    var a = "10";
    let b = 1;
    const c = 2;
}

console.log(a);
console.log(b);
console.log(c);



/**
 * 2. Hoisting difference:
 * 
 * var, let and const all are hoisted however only var is hoisted and initialized with 
 * undefined where as let and const are hoisted in
 * temporal dead zone but not initialized and due to their presence in temporal dead zone 
 * after hoisting if we access them before its
 * declaration it gives a reference error.
 * 
 */

console.log(p);
var p = 10;

console.log(q);
let q = 20;

console.log(r);
const r = 1;


/**
 * 3. Re declaration
 * 
 * var can be re-declared in the same scope whereas let and const can not be re 
 * declared in the same scope
 */

var name = "Gaurav";
var name = "Pankaj";   // allowed


let surname = "bhatt";
// let surname = "bhatt";   // not allowed

const z = 1;
// const z = 2; // not allowed



/**
 * 4. Re Assignment
 * 
 * var and let can be re-assigned in the same scope whereas const 
 * can not be re assigned in the same scope
 */

var school = "DDPS";
school = "Dps";   // allowed


let city = "Ghaziabad";
city = "Banglore";   // not allowed

const state = 1;
// state = 2; // not allowed