const hexCodeValid = 'ABCDEF123456789';

/**
 * Time out function of web api/browser can be seen in browser prototype, which is changing the inner html of
 * h1 tag.
 */

const timer = setTimeout(() => {
    document.querySelector('h1').innerHTML = "Gaurav's learning of js";
}, 2000);


/**
 * Clear time out function to stop the setTimeOutFunction if not executed within its given time frame and 
 * button is clicked.
 */
document.querySelector('#stop').addEventListener('click', () => {
    clearTimeout(timer);
})


/** */
const body = document.querySelector('.body');
let interval;

/**
 * Setting an interval using setInterval inside a function and taking the reference of that
 * function in intervalGame and taking the reference of this setInterval inside
 * a variable interval.
 */
const intervalGame = function () {
    let color;
    interval = setInterval(() => {
        color = '';
        for (let i = 0; i < 6; i++) {
            color += hexCodeValid[Math.floor(Math.random() * 14)];
        }
        body.style.backgroundColor = `#${color}`;
        console.log(color);
    }, 1000);
}

/**Use a event of click and pass the main function's reference for this event in which background color
 * start changing on interval of 1 sec once button is clicked
*/
document.querySelector('#startBgGame').addEventListener('click', intervalGame);

/**Use a button to stop the changing of background once the button is clicked by clearInterval
 * and passing reference of the setInterval function.
 */
document.querySelector('#stopBgGame').addEventListener('click', () => {
    clearInterval(interval);
    body.style.backgroundColor = 'white'
})
