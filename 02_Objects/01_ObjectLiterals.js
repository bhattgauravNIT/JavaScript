/**
 * An object in js is a dataType .
 * 
 * There are two ways to create an object i,e via 
 * 1. Object literal
 *  let obj = {};
 *  This is not a singleton objects i,e multiple instances of obj can be created and shared across.
 * 
 * 2. Constructor Function
 *  let obj = new Object();
 *  This is a singleton object i,e this is the only single instance of obj and only this single instance
 *  will be shared across all the other places if needed.
 */


/**
 * 1.Object literal: 
 */

let obj = {
    name: "Gaurav",
    age: 27,
    "full_name": "Gaurav Bhatt",
    email: "abc@pqrs.com",

}

// console.log(obj.name);
// console.log(obj["full_name"]);
// console.log(obj["email"]);


/**1.1
 * 
 * Insert a dynamic valued key in an object, 
 * 
 * this dynamic key property is accessed via obj[nickname] and not obj["nickName"]
 * whereas rest normal properties are accessed either as
 * obj["name"] or obj.name
 */

let nickName = "PropertyName";
obj = {
    name: "Gaurav",
    age: 27,
    "full_name": "Gaurav Bhatt",
    email: "abc@pqrs.com",
    [nickName]: "booo"
}

// console.log(obj[nickName]);


/**1.2
 * 
 * Insert a dynamic key as a property which is having a dynamic value in an object */

let propName = "prop_name";
let propValue = "prop_value";

obj = {
    name: "Gaurav",
    age: 27,
    "full_name": "Gaurav Bhatt",
    email: "abc@pqrs.com",
    [propName]: `${propValue}`
}

// console.log(obj[propName]);


/**1.3
 * 
 * Change value of a property in object */

obj[propName] = 'prop_value_1'
// console.log(obj);


/**1.4
 * 
 * Don't allow any change in value for any property in object */

Object.freeze(obj);
obj[propName] = 'prop_value_2';
// console.log(obj);


/**
 * 1.5
 * 
 * Don't allow change only for email property in object */
propName = "prop_name";
propValue = "prop_value";

let obj1 = {
    name: "Gaurav",
    age: 27,
    "full_name": "Gaurav Bhatt",
    email: "abc@pqrs.com",
    [propName]: `${propValue}`
}

Object.defineProperty(obj1, "email", {
    writable: false, // prevents the property from being modified
    configurable: false // prevents the property from being deleted or reconfigured
});

obj["email"] = "change@change.com";
// console.log(obj1);


/**
 * 1.6
 * 
 * Insert a function in value of a key in object
 */

obj1 = {
    name: "Gaurav",
    age: 27,
    "full_name": "Gaurav Bhatt",
    email: "abc@pqrs.com",
    [propName]: `${propValue}`,
    greet: function () { console.log(`Send greetings from ${this.name}`) }
}

// obj1.greet();

/**
 * 1.7
 * 
 * Create and access a nested object
 */

let obj3 = {
    email: "xyz@gmail.com",
    details: {
        fullName: {
            firstName: "gaurav",
            lastName: "bhatt"
        },
        address: {
            pinCode: 201002,
            city: "ghaziabad"
        }
    }
}

// console.log(obj3["details"]["address"]["pinCode"]);


/**
 * 1.8
 * 
 * Combine n number of objects together
 */

let obj4 = { 1: "0", 2: "1" };
let obj5 = { 3: "2", 4: "3" };

// console.log({ ...obj4, ...obj5 });


/**
 * 1.9
 * 
 * Give me all the keys and all the values of a object
 */

let obj6 = {
    name: "Gaurav",
    age: 27,
    "full_name": "Gaurav Bhatt",
    email: "abc@pqrs.com",
    [propName]: `${propValue}`
}

// console.log(Object.keys(obj6)); // gives an array of keys of object
// console.log(Object.values(obj6)); // gives an array of values of object
// console.log(Object.entries(obj6)) // gives an array of array of key and values


// In case of nested objects it don't destructure the object entirely and give in accordance to the first or top level

obj3 = {
    email: "xyz@gmail.com",
    details: {
        fullName: {
            firstName: "gaurav",
            lastName: "bhatt"
        },
        address: {
            pinCode: 201002,
            city: "ghaziabad"
        }
    }
}

const keys = Object.keys(obj3);
const values = Object.values(obj3);

// console.log(keys); // [ 'email', 'details' ]

// console.log(values);
/**[
   'xyz@gmail.com',
   {
     fullName: { firstName: 'gaurav', lastName: 'bhatt' },
     address: { pinCode: 201002, city: 'ghaziabad' }
   }
 ]*/


/**
 * 1.10
 * 
 * Check if a property exists in an object
 */

obj3 = {
    email: "xyz@gmail.com",
    details: {
        fullName: {
            firstName: "gaurav",
            lastName: "bhatt"
        },
        address: {
            pinCode: 201002,
            city: "ghaziabad"
        }
    }
}

// console.log(obj3.hasOwnProperty("email"));


/**
 * 
 * 1.11
 * 
 * Destructure an object
 */

obj3 = {
    email: "xyz@gmail.com",
    details: {
        fullName: {
            firstName: "gaurav",
            lastName: "bhatt"
        },
        address: {
            pinCode: 201002,
            city: "ghaziabad"
        }
    }
}

let { email, details } = obj3;
let { fullName, address } = details;
// console.log(details);
// console.log(email);
// console.log(fullName);
// console.log(address);



/**
 * Property descriptor and making a property non writable in js
 */

let object = {
    name: "Gaurav",
    phoneNumber: 9354337987,
    email: "bhatt@xcy.com"
}

console.log(Object.getOwnPropertyDescriptor(object, 'name'));
/**
 * We got o/p as 
 * {
  value: 'Gaurav',  
  writable: true,   
  enumerable: true, 
  configurable: true
}

so every property inside an object also has few properties like
writable: true,   
  enumerable: true, 
  configurable: true

  so we can alter these properties.
  writable means that this property of the object can be edited
  enumerable means that this object property is iterable and by making it false 
  it wont get detected if we iterate over the object
  if we want to edit any property we can do.
 */

for (let [key, value] of Object.entries(object)) {
    console.log(`${key}: ${value}`);
}

Object.defineProperty(object, 'phoneNumber', {
    writable: false,
    enumerable: false
})

object.phoneNumber = 99999999;
console.log(object);
for (let [key, value] of Object.entries(object)) {
    console.log(`${key}: ${value}`);
}

