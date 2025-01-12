/**
 * The main difference between
 * let str = "Gaurav" and let str1 = new String("Gaurav") is that the first syntax creates a primitive string whereas the
 * second string creates a string object.
 * 
 * Lets understand it:
 * 
 *                                                      let str = "Gaurav";
                                                        let str1 = str;
                                                        str1 = "Bhatt";

                                                        console.log(str);
                                                        console.log(str1);

    str variable is created in stack and has reference to a memory location which is storing the value "Gaurav" and is a primitive string.
    We said str1 = str;

    Now str1 is given a copy of str, so str1 is created in stack and now is referencing to a new memory address which is storing a copy
    of str i,e "Gaurav";

    Once we change str1 then str1's value which is present in a different memory address gets updated and thus no effect no str.

    Lets understand string object:

                                                        let str2 = new String("Gaurav1");
                                                        let str3 = str2;

                                                        str3 = "Testing";
                                                        console.log(str2);
                                                        console.log(str3);

    when we say str2 = new String so str2 gets created in stack and now is pointing towards a memory address which holds a string object.
    when we say str3 = str2 now str3 variable gets created in the stack and is also referencing to same memory location as that of str2.
    Objects are passed by reference.

    However now we did str3 = "Testing", i,e assigned it to a primitive string and not changed the property of the object which its referencing
    to and thus this is a case of reference reassignment thus now str3 is pointing to a new memory address which holds
    a primitive string "Testing" thus str2 remains unchanged.

    Lets summarize:

    str2 Points to a String Object:

    str2 holds a reference to a String object (String { "Gaurav1" }).
    This object is stored in memory.
    str3 = str2; Shares the Reference:

    str3 now references the same object as str2. Both point to the same memory location.
    str3 = "Testing"; Reassigns str3:

    When you write str3 = "Testing";, you are not modifying the String object. Instead:
    str3 is reassigned to point to a new primitive string ("Testing").
    This breaks the reference link between str2 and str3.
    str2 Remains Unchanged:

    str2 still holds the reference to the original String object in memory because you never modified the object itself.
    You only changed what str3 points to.

 */


let str = "Gaurav";
let str1 = str;
str1 = "Bhatt";

console.log(str); // "Gaurav"
console.log(str1); //"Bhatt"


let str2 = new String("Gaurav1");
let str3 = str2;

str3 = "Testing";
console.log(str2);
console.log(str3);



/**
 * Even methods which manipulates the string, doesn't go and effect the object as they give back a primitive string.
 * 
 * So str4 was an reference variable pointing to an string object in heap
 * str5 is also a reference variable pointing to the same object as that of str4
 * 
 * str5 = str5.replaceAll('a','b')
 * replaced all a's with b's and is a primitive string and thus reference reassignment happened and str4 remain intact.
 */
let str4 = new String("Gaurav12");
let str5 = str4;

str5 = str5.replaceAll('a','b');

console.log(str4); // Object{'Gaurav'}
console.log(str5); // Gburbv12