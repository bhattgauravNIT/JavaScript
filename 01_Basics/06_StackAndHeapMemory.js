/**
 * Just like other programming languages there are two kinds of memory in js as well i,e heap and stack memory.
 * 
 * All primitives are call by value or a copy of their value is provided whereas all non primitives in js are call by 
 * reference.
 * 
 * Let's take an example to understand
 * 
 * let name = "Gaurav";
 * let name1 = name;
 * 
 * name1 = "bhatt";
 * 
 * console.log(name);
 * console.log(name1);
 * 
 * o/p is: "Gaurav"
 *          "bhatt"
 * 
 * Let's understand how flow happened.
 * 
 * So when we said let name so a name variable got declared inside stack memory and it is referencing to a memory address in heap
 * which contains a value "Gaurav"; say $100000
 * 
 * Now when we said let name1 so a name1 variable got declared inside stack memory and is referencing to a new memory address in
 * heap which contains a duplicated value from name "Gaurav". say $100001
 * 
 * Now when we changed name1 to bhatt so the name1 in stack was referencing to $100001 and thus at that address the value got changed
 * from "gaurav" to "bhatt" and the name variable value which is present in $100000 remained intact.
 * 
 * This same happens with all primitives in js.
 * 
 * However in js , the non primitives like array, object and functions are passed by reference. Let's understand this.
 * 
 * let obj = {
 * name: "Gaurav",
 * email: "bhatt@yahoo"
 * }
 * 
 * let obj1 = obj;
 * obj1.name = "bhatt";
 * console.log(obj.name);
 * console.log(obj1.name);
 * 
 * o/p : bhatt
 *       bhatt
 * 
 * So when we said let obj so obj named variable got created in the stack which is referencing to a memory location in heap say $111111 which is storing two of the
 * properties i,e name and email.
 * 
 * Now when we said let obj1 = obj so we created another variable obj1 inside stack and it is referencing to the same memory location which obj is
 * referencing to i,e $111111
 * and thus any change by obj1 in any of the properties in directly changing the properties present in the same reference as that of obj.
 */

/**
 * Pass by values for primitives
 */

let name = "Gaurav";
let name1 = name;

name1 = "bhatt";

console.log(name);
console.log(name1);


/**
 * Pass by reference for non primitives 
 * */

let obj = {
    name: "Gaurav",
    email: "bhatt@yahoo"
}

let obj1 = obj;
obj1.name = "bhatt";
console.log(obj.name);
console.log(obj1.name);

