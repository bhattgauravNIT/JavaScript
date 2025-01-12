/**
 * Fetch is js is used to make some network calls and fetch data from the server.
 * It also gives a promise and thus this promise needs to be consumed.
 */

/**
 * 1. Consumption of fetch promise using then and catch
 */

function getData() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((res) => {
            return res.json();
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log('error :', err)
        })
}

// getData();


/**
 * 2. Consumption of fetch promise using async and await
 */

async function getBitcoinData() {
    try {
        let resp = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        resp = await resp.json();
        console.log(resp);
    } catch (err) {
        console.log('error :', err)
    }
}

getBitcoinData();


/**
 * How does fetch works internally.
 * 
 * So lets understand with an image regarding asynchronous process 
 * Consider diagram
* (image.png) in 07_AsyncJs

  Asynchronous operations like setTimeout, setInterval etc are send from js engine to web api where a register 
  callback which pushes this call to a taskQueue.

  However in case of fetch once it gets send from js engine this register callback does not send it to taskQueue, but
  sends it to a different priority queue.

  This queue is in priority as compared to normal taskQueue and event loop is responsible for managing and pushing
  these task back to call stack inside js engine for execution in functional execution context.

  Once a fetch is fired two things happens,
  a) Creation of memory space for data
  b) Sending fetch call to web api/Node 

  Inside memory space a data is created which interacts with two different arrays based on situation of resolve or reject.

  These two arrays are onFulfilled and onRejection

  In case of network able to hit the request irrespective its a 404 or not found, but if this call happens then its a state of
  resolve and whatever response is coming either 404 even will be pushed to onFulfilled array,
  in case of network not able to hit request results in pushing of error in onRejection.

  This data is formulated using these two array and then is available in global execution context to be used by us.

 */