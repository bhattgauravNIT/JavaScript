/**
 * Given an object, give me all the keys and values of this object
 * 
 */

const obj = {
    name: "Alice",
    age: 30,
    salary: 50000
}

for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}


/**
 * 
 * Given an array of objects simple, find the total salary in this
 */

const employees = [
    { name: "Alice", age: 30, salary: 50000 },
    { name: "Bob", age: 25, salary: 60000 },
    { name: "Charlie", age: 35, salary: 70000 }
];

function getTotalSalary(employees) {
    let sm = 0;
    for (let item of employees) {
        if (item.hasOwnProperty("salary")) {
            sm += item["salary"];
        }
    }
    return sm;
}

// console.log(getTotalSalary(employees));



/**
 * 
 * Given an array of objects complex, find the total salary in this
 */

const employeeDetails = [
    {
        name: "Alice",
        age: 30,
        carrer: [
            {
                salary: 1,
                position: "SDE",
                dept: "IT"
            },
            {
                salary: 1,
                position: "SDE",
                dept: "IT"
            },
            {
                salary: 1,
                position: "SDE",
                dept: "IT"
            }
        ]

    },
    {
        name: "Bob",
        age: 25,
        carrer: [
            {
                salary: 1,
                position: "SDE",
                dept: "IT"
            },
            {
                salary: 1,
                position: "SDE",
                dept: "IT"
            },
            {
                salary: 1,
                position: "SDE",
                dept: "IT"
            }
        ]
    },
    {
        name: "Charlie",
        age: 35,
        carrer: [
            {
                salary: 1,
                position: "SDE",
                dept: "IT"
            },
            {
                salary: 1,
                position: "SDE",
                dept: "IT"
            },
            {
                salary: 1,
                position: "SDE",
                dept: "IT"
            }
        ]
    }
];

function getSalary(empDetails) {
    let sm = 0;
    for (let empDetail of empDetails) {
        if (empDetail.hasOwnProperty("carrer")) {
            for (let carrerDetails of empDetail["carrer"]) {
                if (carrerDetails.hasOwnProperty("salary")) {
                    sm += carrerDetails["salary"];
                }
            }
        }
    }
    return sm;
}

// console.log(getSalary(employeeDetails));



/**
 * Given an infinite object, the task is which ends with a key false, the task is to print a counter which
 * resembles the number of nested objects inside it
 */

const nestedObject = {
    boolean: true,
    next: {
        boolean: true,
        next: {
            boolean: true,
            next: {
                boolean: true,
                next: {
                    boolean: true,
                    next: {
                        boolean: true,
                        next: {
                            boolean: true,
                            next: {
                                boolean: true,
                                next: {
                                    boolean: true,
                                    next: {
                                        boolean: true,
                                        next: {
                                            boolean: false,
                                            next: null
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

function countNestedObj(object) {
    let bool = false;
    let cnt = 0;
    if (object.hasOwnProperty("boolean")) {
        bool = object["boolean"];
    }
    let { boolean, next } = object;
    while (bool) {
        if (!boolean) {
            break;
        } else {
            boolean = next["boolean"];
            next = next["next"];
            cnt++;
        }
    }
    return cnt;
}

// console.log(countNestedObj(nestedObject));



/**
 * Given an array and a chunk size , the task is to segregate the array elements based on chunks and return an array of
 * array of these chunks
 * 
 * Ex: arr = [1,2,3,4,5], chunkSize = 3
 * o/p: [[1,2,3],[4,5]] 
 */
var chunk = function (arr, size) {
    let res = [];
    let i = 0;
    while (i < arr.length) {
        let chunk = arr.slice(i, size + i);
        res.push(chunk);
        i = size + i;
    }
    console.log(res);
};

// console.log(chunk([1, 2, 3, 4, 5], 3));


/**
 * Flatten n densely deep array
 * 
 * Ex: arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 0
 * [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
 * 
 * Ex: arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
   n = 1

   o/p: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

   Ex: arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
   n = 2

   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
 */

function flatten(arr, n, currentDepth = 0) {
    if (n === 0 || currentDepth >= n) {
        return arr;
    }
    let res = [];
    for (let val of arr) {
        if (Array.isArray(val)) {
            res.push(...flatten(val, n, currentDepth + 1));
        } else {
            res.push(val);
        }
    }
    return res;
}

function flatten1(arr, n) {
    return arr.flat(n);
}


/**
 * Given two arrays arr1 and arr2, return a new array joinedArray. 
 * All the objects in each of the two inputs arrays will contain an id field that has an integer value. 
 * joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray 
 * should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.
 * If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.
 * If two objects share an id, their properties should be merged into a single object:
 * If a key only exists in one object, that single key-value pair should be included in the object.
 * If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
 * Example 1:
 * Input:
 * arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
    ], 
    arr2 = [
    {"id": 3, "x": 5}
    ]

    Output: 

    [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9},
    {"id": 3, "x": 5}

    ]

    Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.

    Example 2:


    Input: 

    arr1 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}

    ], 

    arr2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}

    ]

    Output: 

    [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}

    ]

    Explanation: The two objects with id=1 and id=3 are included in the result array without modification. 
    The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.

    Example 3:


    Input: 

    arr1 = [
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}

    ]

    arr2 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}

    ]

    Output: [
    {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}

    ]

    Explanation: The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used. 
    Since the key "y" only exists in arr1, that value is taken form arr1.
 
 */

function mergeObjects(arr1, arr2) {
    let mp = new Map();
    for (let item1 of arr1) {
        mp.set(item1.id, item1);
    }
    for (let item2 of arr2) {
        if (mp.has(item2.id)) {
            let obj = mp.get(item2.id);
            let mergedObj = { ...obj, ...item2 };
            mp.set(item2.id, mergedObj);
        } else {
            mp.set(item2.id, item2);
        }
    }
    mp = new Map([...mp.entries()].sort((a, b) => a[0] - b[0]));
    let res = [];
    for (const [key, value] of mp) {
        res.push(value);
    }
    return res;
};

