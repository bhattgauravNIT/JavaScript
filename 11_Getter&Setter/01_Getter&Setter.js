class Person {
    constructor(name, password) {
        this.name = name;
        this._password = password; // _ variable  intended to be private
    }

    /**
     * @param {any} val
     */
    set password(val) {
        this._password = val;
    }

    get password() {
        return this._password;
    }
}

let p1 = new Person("Gaurav", "abc");
console.log(p1.password); 
/** 
 * when we invoke the property password since it was a getter so get function gets invoked
  automatically and thus we don't invoke get function using functionCall().
*/