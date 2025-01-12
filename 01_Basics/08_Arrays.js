// const _ = require('lodash');

/**
 * Arrays are objects in js.
 */


/**
 * Here we are creating a reference to the same array in memory. 
 * This means arr2 and arr point to the exact same object, not separate copies.
 * Thus change in any property will lead to change in original object itself.
 */
let arr = [1, 2, 3, 4, 5];
let arr2 = arr;
arr2[0] = 9;

console.log(arr); // [ 9, 2, 3, 4, 5 ]
console.log(arr2);  // [ 9, 2, 3, 4, 5 ]


/**
 * Shallow copy:
 * In shallow copying a copy of the original object is created however its nested properties are shared via reference and
 * any change in the nested property will change the original object.
 * 
 * So in below an array variable is created in stack and is referencing to an object in heap.
 * when we do array1 = [...array] we are doing a shallow copy so a new variable array1 is created which is referencing to a new
 * memory address and the object is shallow copied from original object however the nested properties are still referenced to the
 * same original object and thus any change in nested property will also mark a change in original object.
 * 
 * array1[5].name = "bhatt" will also change the name value in array variable also as we are changing nested property
 * 
 * array1[0] = 9 will only change the array1 and not array itself.
 * 
 * There are many ways of shallow copy like: [...origValue] or Array.from(origValue)
 */

let array = [1, 2, 3, 4, 5, { "name": "gaurav" }];
let array1 = [...array]; // shallow copy

array1[5].name = "bhatt"
console.log(array);
console.log(array1);

const originalArray = [1, 2, { a: 3 }];
const shallowCopy = Array.from(originalArray); // shallow copy



/**Deep copy 
 * 
 * A deep copy creates an entirely copy that is completely independent of the original.
 * It copies all levels of the structure, including nested properties ensuring there is no shared references between the 
 * original and the copy.
 * 
 * Thus any change in the copied value will not affect the original
 * 
 * There are many ways to deep copy like:
 * JSON.parse(JSON.stringify(origArray)),
 * _.cloneDeep(),
 * structuredClone()
 * 
*/
let orig = [1, 2, [3, 4], { name: "gaurav" }];
let deepCopy = JSON.parse(JSON.stringify(array)); // deep copy

deepCopy[2][0] = 9; // Modify nested array
deepCopy[3].name = "bhatt"; // Modify nested object

console.log(orig);    // [1, 2, [3, 4], { name: "gaurav" }]
console.log(deepCopy); // [1, 2, [9, 4], { name: "bhatt" }]



// let deepCopy1 = _.cloneDeep(orig); // deep copy
// deepCopy1[2][0] = 9;

console.log(orig);    // [1, 2, [3, 4], { name: "gaurav" }]
console.log(deepCopy); // [1, 2, [9, 4], { name: "gaurav" }]

let deepCopy3 = structuredClone(orig); // deep copy



/**
 * Slice vs splice
 * 
 * In slice and well as splice the last index does not get included , in case of slice the original array
 * does not get altered whereas in case of splice the original array gets altered.
 */

let original = [1, 2, 3, 4, 5];
let sliced = original.slice(0, 3); // last index not included

console.log(`After slicing original does not change and remains  ${original} and sliced array is ${sliced}`);

let spliced = original.splice(0, 3); // last index not included
console.log(`After splicing original got changed to ${original} and spliced array is ${spliced}`);



/**Merge arrays 
 * 
 * Spread operator is used to merge arrays.
 * Spread means when we use spread on anything it scatters its individual values
*/

let a1 = [1, 2, 3, 4, 5];
let a2 = [6, 7, 8, 9, 10];

console.log([...a1, ...a2]);


/**Flat
 * 
 * This is used to flat an nth depth array
 */

let a3 = [1, 2, [3], [4, [5, [6]]], [7, 8, 9], 10];
console.log(a3.flat(Infinity));

