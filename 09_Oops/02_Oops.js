/**
 * Javascript is object oriented from ES6, however javascript is always a prototype based language and
 * thus under the hood it will always remain a prototype based language , although some syntactical sugars
 * may give us a feel of js being object oriented.
 * 
 * Lets understand what we mean by js is a prototype based language, in js everything is a object.
 * By everything we mean everything i,e arrays, string etc.
 * Why? 
 * 
 * Js does prototype inheritance.
 * 
 * let arr = [1,2,3]
 * If you do a console.log(arr);
 * 
 * we will see array in browser, if we expand it you will see 1 placed at 0th index and so on..
 * but in last you will see a prototype, if you expand it you can see multiple keys whose values are some functions.
 * 
 * like 
 * 
 * map: function(){......}.
 * 
 * Now it means arrays are treated as objects and has keys which has values like functions.
 * 
 * Now the parent of array is Object as in last of that prototype we will see another prototype which is object
 * and then it shows all properties of an object.
 * 
 *      So     array ----------------->  object
 * 
 * Similarly string --------------------> object
 * 
 * So everything in js is having a prototype inheritance from object.
 */


/**
 * 
 *This is an example of constructor function.
 this refers to the current execution context.
 So inside the constructor function if I log this so it will be an global object in context to the function userData.
 Inside that global object I m setting userName, isLoggedIn and loginCount property.
 And the values are being set to the arguments which is being passed to this function.

 But there is a main problem here, suppose i create another user user1 with different values , so it will override the
 values which we being passed for user.
 Because now the current execution context is a different instance and thus we need new keyword, this helps us creation
 of different instances.
 */
function userData(userName, isLoggedIn, loginCount) {
    // console.log(this);
    this.userName = userName;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount;
    return this;
}

const user = userData("Gaurav", true, 5);
console.log(user.userName);

const user2 = userData("Bhatt", false, 4);
console.log(user.userName); // bhatt gets printed so this has over ridded user values.


/**
 * In order to solve this issue we need a new keyword
 * The new keyword in JavaScript is used to create an instance of an object from a constructor function or class.
 */

const user3 = new userData("Panda", true, 12);
const user4 = new userData("Mango", false, 12);
console.log(user3.userName);
console.log(user4.userName);



/**
 * Using classes in js
 * 
 * So even classes are internally constructor functions only, only syntactical sugar gives us a feel of
 * class however this class Person is equivalent to a constructor function defined like
 * 
 * function Person(name, age, mobileNumber) {
    this.name = name;
    this.age = age;
    this.mobileNumber = mobileNumber;
}
    Person.prototype.greet = function() {
    console.log(`Hi ${this.name}, age: ${this.age}, your mobile number is ${this.mobileNumber}`);
};

  So js although syntactically gives us a feel of classes but internally 
  under the hood it will always remain a prototype based language
 */

class Person {
    constructor(name, age, mobileNumber) {
        this.name = name;
        this.age = age;
        this.mobileNumber = mobileNumber;
    }

    getDetails() {
        return `Hi ${this.name}, age: ${this.age}, your mobile number is ${this.mobileNumber}`;
    }
}

let p1 = new Person("Gaurav", 21, 9354377);
let p2 = new Person("Panda", 34, 3876578976);

console.log(p1.getDetails());
console.log(p2.getDetails());


/**
 * Inheritance
 */

class User {
    constructor(userName) {
        this.userName = userName;
    }

    greetUser() {
        console.log(`Welcome ${this.userName}`);
    }
}

/**Extends keyword is user to have inheritance
 * and super keyword is used to call constructor of parent class
 */
class Teacher extends User {
    constructor(userName, email, mobileNumber) {
        super(userName);
        this.email = email;
        this.mobileNumber = mobileNumber;
    }
}

let teacher = new Teacher("Gaurav", "bh@hjj", 98789);
teacher.greetUser();



/**Static keyword
 * 
 * Static is used when we need to make a property/methods belong only to the class and not
 * to the instances of the class or the child or classes which inherit it.
 */

class Universe {
    static god = "God";

    constructor(planetName, area) {
        this.planetName = planetName;
        this.area = area;
    }

    static getGodName() {
        return this.god;
    }
}

let u = new Universe("Earth", 1200);
// console.log(u.getGodName()); // error not a function because its inaccessible to instances of the class
console.log(Universe.getGodName());
console.log(u.god); // undefined
console.log(Universe.god);
