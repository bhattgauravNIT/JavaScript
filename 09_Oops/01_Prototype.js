/**
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
 * In the similar way any function which we create is also having prototype inheritance from object and is basically
 * an object only.
 * 
 * Thus to this multiply function we can add keys like name and even methods like value which is a function.
 * This multiply function is a constructor function.
 * 
 * This new keyword helps us to create an instance of an object or constructor function and bind all the prototypes
 * of that object or constructor function to that instance.
 * */

function multiply(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
}

multiply.prototype.name = 'Multiply method';
multiply.prototype.value = function () {
    return this.num1 * this.num2;
}

const mul = new multiply(1, 2);
console.log(mul.value());
console.log(mul.name);



/** 
 * Just like say we have length property in string
 * let str = "abc";
 * str.length //3
 * 
 * In same manner To any instance of string , define a true length property which helps to get the trueLength of that string.
 * For ex: str = "     Abc      ", trueLength = 3, so we should be able to get true length by
 * getting rid of all spaces at front or at back.
 * 
 * The property should be named as trueLength only.
 * 
 * Ex:
 * let myName = "    Gaurav"
 * console.log(myName.trueLength) // 6
*/

Object.defineProperty(String.prototype, 'trueLength', {
    get: function () {
        return this.trim().length
    }
})

let str = "      Gaurav";
console.log(str.length);
console.log(str.trueLength);



