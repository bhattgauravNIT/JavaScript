/**
 * For each loop;
 * 
 * For each loop is used to loop over the items and take a call back function which is capable
 * of handling three parameters i,e val,index and arr.
 * 
 * Val is arbitrary name for the inputs, index can be considered as index values and arr is the array itself.
 * For each loop does not return anything and its return type is void.
 */

let arr = [1, 2, 3, 4, 5];
arr.forEach((val, index, arr) => {
    // console.log(val, index, arr);
})




/**Filters
 * 
 * Filter function in array is used to filter out some elements based upon a certain
 * condition and it also takes a callback function as argument and returns a number [];
 */

let res = arr.filter((val) => {
    return val > 2;
})

// console.log(res);

let obj = [
    {
        name: "Gaurav",
        role: "SDE1"
    },
    {
        name: "Poonam",
        role: "SDE1"
    },
    {
        name: "Brijesh",
        role: "SDE2"
    },
    {
        name: "Pankaj",
        role: "SDE2"
    },
    {
        name: "Vinod",
        role: "SDE2"
    }
]

let res1 = obj.filter((item) => {
    return item.role === "SDE2";
})

// console.log(res1);


/**
 * Map function in array is used to transform elements in the array.
 * It takes an callback function as an argument parameter and also returns a nums []
 */

let res2 = arr.map((item) => {
    return item * 2;
})

// console.log(res2);


/**
 * Chaining of methods
 */

let res3 = arr.map((val) => {
    return val * 10;
}).map((val) => {
    return val + 1;
}).filter((val) => {
    return val % 11 === 0;
})

// console.log(res3);


/**Reduce methods 
 * 
 * Find sum of elements in array
 * 
 * Reduce methods takes a callback as an function argument , this call back function needs
 * a prevValue which is a number and a currentValue which is the current iterated value
 * 
 * So in our case of finding sum of elements of array, we used prevValue as 0 and the currentValue will be 
 * iteration over every element of the array.
 * 
 * we return prevValue + currentValue thus after every iteration the prevValue keeps on updating itself 
 * as prevValue + currentValue
*/

let initial = 0;
let res4 = arr.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
}, initial)

// console.log(res4);

/**
 * Add all prices in shopping cart using reduce
 * 
 * so we have two parameters in callback function argument of reduce which are prev and current,
 * prev is the previously obtained value which is number and current is the current iteration.
 * 
 * So we return prev + current["price"] where initial value of prev we set to 0.
 */

let cart = [
    {
        course: "js",
        price: 100
    },
    {
        course: "DSA",
        price: 200
    },
    {
        course: "ts",
        price: 300
    },
]

let sum = cart.reduce((prev, current) => {
    return prev + current["price"];
}, 0);

console.log(sum);