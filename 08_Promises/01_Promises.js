/**
 * 1. 
 * 
 * Promises are object in js which is used to handle asynchronous operation in js,
 * It takes one parameter as a callBack function which has 2 parameters i,e resolve and reject.
 * 
 * In order to consume a promise we can use (then) which is associated with the resolved state of the promise which
 * we are dealing with.
 */

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async function completed");
        resolve();
    }, 1000)
})

promise1.then(() => {
    console.log("Promise is resolved");
})


/**
 * 2.
 * Getting some data through asynchronous process and then setting it to a promise and consuming that data.
 * 
 * Here instead of placing the promise inside a variable and then consuming it we have simply, placed a (then) directly
 * with the promise, the place where promise is resolved is where we are setting the data which needs to be consumed and then
 * simply (then) , which takes a callback we are saying res as a param and this res can be used to consume data which is sent by
 * the resolve state of the promise.
 */

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ userName: "bhatt", mobileNumber: "987654xxxx" });
    }, 1000)
}).then((res) => {
    console.log(res);
})


/**
 * 3.
 * Catching errors in promises.
 * 
 * Errors while promise creation is created via reject state where we can pass the error which we want
 * to consume in case of error.
 * 
 * Like then and resolve are associated to each other, in the same way reject and catch are associated to each other.
 * Catch also takes an callback as an argument and it can have a parameter which is sended via reject and can be accessed inside
 * the consumption.
 */

new Promise((resolve, reject) => {
    let error = true;
    setTimeout(() => {
        if (!error) {
            resolve({ userName: "bhatt", mobileNumber: "987654xxxx" });
        } else {
            reject("Oops something went wrong");
        }
    }, 1000)
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})


/**
 * 4.
 * Chaining in promises
 * 
 * The res.userName returned via first then is consumed by the second then and further it logged 
 * that returned value, such phenomena is called chaining.
 */

new Promise((resolve, reject) => {
    let err = false;
    setTimeout(() => {
        if (!err) {
            resolve({ userName: "bhatt", mobileNumber: "987654xxxx" })
        } else {
            reject("Oops something went wrong");
        }
    }, 1000)
}).then((res) => {
    return res.userName;
}).then((userName) => {
    console.log(` Hello ${userName} to the application`)
}).catch((error) => {
    console.log(error);
})

/**
 * 5.
 * Finally in promises.
 * 
 * finally is always executed either is promise is rejected or resolved.
 * Thus finally can be used to say do some clean up stuff.
 */

new Promise((resolve, reject) => {
    let err = true;
    setTimeout(() => {
        if (!err) {
            resolve({ userName: "bhatt", mobileNumber: "987654xxxx" })
        } else {
            reject("Oops something went wrong in finally promise example");
        }
    }, 1000)
}).then((res) => {
    return res.userName;
}).then((userName) => {
    console.log(` Hello ${userName} to the application`)
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('It will be executed either promise is resolved or rejected.')
})


/**
 * 6.
 * Consuming promises using async and await and not using then and catch.
 */

let promiseA = new Promise((resolve, reject) => {
    let err = true;
    setTimeout(() => {
        if (!err) {
            resolve({ userName: "bhattuu", mobileNumber: "987654XXXX" })
        } else {
            reject('Oops something went wrong in consuming promise via async and await')
        }
    }, 1000)
})

async function consumePromise() {
    try {
        let response = await promiseA;
        console.log(`Hello ${response.userName} to the application`);
    } catch (err) {
        console.log(err);
    }
}

consumePromise();