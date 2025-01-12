/**
 * Conversion to number type
 */

let a = "0";
console.log(Number(a)); // 0

let b = true;
console.log(Number(b)); // 1

let c = "33abcd";
console.log(Number(c)); //Nan

let d = NaN;
console.log(Number(d)); // Nan

let e = null;
console.log(Number(e)); // 0

let f = undefined;
console.log(Number(f));  // Nan


/**
 * O/p:
 * 
 * /**
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ 0      │
│ 1       │ 1      │
│ 2       │ NaN    │
│ 3       │ NaN    │
│ 4       │ 0      │
│ 5       │ NaN    │
└─────────┴────────┘
 */

console.table([Number(0), Number(true), Number("33abc"), Number(NaN), Number(null), Number(undefined)]);


/**Operations 
 * 
 * If we are concat a string with number, the result will always be a string concat only, however
 * if two numbers are added before string concat , then numbers are added first and then concatenated with string.
 * Ex: console.log(1+2+"3") will be 33
 * however
 * console.log("1"+2+3) will be 123
*/

console.log("1" + "2") // 12
console.log("1" + 2) // 12
console.log(1 + "2") //12
console.log("1" + 2 + 3) // 123
console.log(1 + 2 + "3") // 33
console.log(+true); // + operator, when used with a non-number operand, tries to convert it into a number so 1


/**Comparisons
 * 
 * In comparisons things are being converted to numbers and then checked upon, in case of ==
 * only values are compared in case of === values as well as datatypes are being compared.
 */

console.log(2 == "2"); //true because only values are compared
console.log(2 === "2"); //false as type and value both are compared

console.log("2" > 1) // true as "2" is converted to a number and compared with number 1 which is smaller
console.log(null > "2"); // null when converted to number is 0 and 2 when converted to number is 2 so 0> 2 is false.

console.log(null == "2") // false