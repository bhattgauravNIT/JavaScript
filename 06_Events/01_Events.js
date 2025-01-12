let cities = [
    {
        name: "Delhi",
        id: "city1"
    },
    {
        name: "Srinagar",
        id: "city2"
    },
    {
        name: "Bangalore",
        id: "city3"
    },
    {
        name: "Gurugram",
        id: "city4"
    }
]


/**Click event on list items */

function addCities(cities) {
    let parentUl = document.querySelector('#cityList');
    cities.forEach((item) => {
        let element = document.createElement('li');
        element.textContent = item.name;
        element.id = item.id;
        element.style.cursor = "pointer";

        parentUl.appendChild(element);

        element.addEventListener('click', () => {
            alert(`welcome to details of ${item.name}`)
        });
    })
}

addCities(cities);



/**
 * The above is a example of Event propagation, in which we handled click event in the same way there can be multiple events which
 * can be handled like keyboard up, down etc.
 * 
 * Now there are two main types of event propagation
 * 1) Bubbling
 * 2) Capturing
 * 
 * when we said:
 * element.addEventListener('click', () => {
            // write some code
        },false) 

    this boolean parameter false is default false and refers to event bubbling.

    Lets understand this with an example

    we had a parent which was ul and had child like li
    when we passed the parameter false in addEventListener, then its called event bubbling
    and flow goes from child -> parent -> grandparent.

    So in below example we had event listener of click on both parent anc child.
    When parent is click is fine , parent click event got propagated, when child is clicked
    the in case of event bubbling first child event gets triggered and then parent event will get triggered.

    How ever in case of event capturing if we would have given true as parameter in both the cases, then
    first parent event would have propagated and then child event will get propagated.
 * 
 */

let parentUl = document.querySelector('#cityList');
parentUl.addEventListener('click', () => {
    console.log('parent ul clicked')
}, false); // mark true for event capturing

let element = document.querySelector('#city2');
element.addEventListener('click', () => {
    console.log('child item clicked')
}, false) // mark true for event capturing


/**Stop propagation, if we don't want that event to propagate further either via bubbling or capturing then we
 * do a stop propagation
 */

element = document.querySelector('#city3');
element.addEventListener('click', (e) => {
    console.log('child item clicked');
    e.stopPropagation();
}) // now in this case the event will not bubble up till the parent


/**Make gurgaon list item disappear /delete**/
let gurgaon = document.querySelector('#city4');
gurgaon.addEventListener('click', (e) => {
    gurgaon.remove();
    gurgaon.stopPropagation();
})
