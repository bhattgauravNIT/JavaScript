/**
 * 
 * Break statement is used to break and terminate the loop, whereas continue statement is used to
 * skip that particular iteration and jump to next iteration.  
 */

for (let i = 0; i < 20; i++) {
    if (i === 5) {
        continue
    }
    if (i === 10) {
        break;
    }
    // console.log(i);
}




/**
 * while loop
 */

let i = 0;
while (i <= 10) {
    // console.log(i);
    i++;
}





/**
 * Do while loop
 */

let j = 11;
do {
    // console.log(j);
    j++;
} while (j <= 10);






/**For of loops */


let arr = [1, 2, 3, 4, 5]

for (let val of arr) {
    // console.log(val);
}

let obj = {
    name: "Gaurav",
    age: 27,
    number: 9354377832
}

// for (let key of obj) { // objects are not iterable and can't be looped in using for of loop
//     // console.log(obj[key]);
// }

let mp = new Map();
mp.set(1, "India");
mp.set(2, "US");

for (const [key, value] of mp) {
    // console.log(key + '-> ' + value);
}




/**
 * 
 * For in loop
 */

obj = {
    name: "Gaurav",
    age: 27,
    number: 9354377832
}

for (let keys in obj) {
    // console.log(keys + '-> ' + obj[keys]);
}


arr = [1, 2, 3, 4, 5];
for (let i in arr) {
    // console.log(arr[i]);
}

// for(let key in mp){  // it wont work as map is an iterable object and needs for of.
//     console.log('abc');
//     console.log(key);
// }


/**
 * The main difference between for in loop and for of loop is that,
 * for of loop gives values directly, whereas for in loop gives the keys of which we are iterating.
 * 
 * for of loop is specifically designed to iterate over the values of iterable objects.
 * for in loop is designed to iterate over the enumerable properties of an object, 
 * 
 * For ex: for of loop failed in object because keys in object are random arbitrary user given and thus to get
 * value of an object it needs keys but keys are also not available whereas in for in loop, we have access to keys
 * so we can iterate using keys in obj and then use these keys to get obj.
 * 
 * For of passes in array as it can get hold of values,
 * for in loop also passes in array as array is also an object with non arbitrary index and specif index i,e 0,1,2,3,4....
 * so a for in loop will give index in array which can be used to get value.
 */