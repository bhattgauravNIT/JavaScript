/**Used to get the element by the id and get stored in title variable */
const title = document.getElementById('title');



/**Used to get the element by class name and returns a html collection */
let item = document.getElementsByClassName('list-item');

//converting html collection into an array
let itemArray = [...item];
itemArray.forEach((li) => {
    li.style["font-size"] = "20px";
})



/**Used to get the attribute class value of an element which we are fetching via id */
console.log(document.getElementById('title').getAttribute('class'));




/**Used to set attribute class over an element which we got by id. Here two classes we have set i,e para1 p1.
 * If only one class would have been set then it would have over ridded the existing class.
*/
document.getElementById('description').setAttribute('class', 'para1 p1');



/**Used to set styling on element stored in title variable. */
title.style.background = "green";
title.style.borderRadius = "5px";
title.style.padding = "5px";



/** Difference between innerText and textContent,
 * 
 * suppose in html "description" is the id of a p tag which is having some text 
 * and inside there is also a span which is having some more text.
 * Now in the span we have given an style of display none, so this addition more text inside span will not be
 * visible.
 * 
 * So if we do document.getElementById("description").innerText so it will give only the text which will be visible after
 * the styles have been applied.
 * 
 * however  document.getElementById("description").textContent will even show the text within the span which will not be shown
 * on browser due to styling.
*/
const description = document.getElementById("description");

console.log(description.innerText);
console.log(description.textContent);




/**Used to get the innerHtml */
console.log(description.innerHTML);





/**Query selector is used to get elements based on id or class or even direct tag names.
 * In case of presence of multiple elements it will give you the first by default
 */

//selecting query by tag name directly
console.log(document.querySelector('h2'));

//selecting query by id 
console.log(document.querySelector('#sub-header2'));

//selecting query by class name
console.log(document.querySelector(".header3"));

let ul = document.querySelector('ul');
let li = ul.querySelector('li');
li.style.color = "red";




/**Query selector all is used to give a nodeList of all the elements which are getting matched based
 * upon id, class or even the tag name itself.
 * 
 * Node list may somewhat looks similar to array but however its not as it does not include some basic array
 * operations like map, filter , reduce etc and thus its different
 */

let myLi = document.querySelectorAll('li');
myLi[0].style.color = "red";
myLi[1].style.color = "green";
myLi[2].style.color = "blue";

myLi.forEach((item) => {
    item.style.backgroundColor = 'white';
})

//conversion of node list to array
myLiArray = [...myLi];
console.log(myLiArray);




/**Accessing DOM elements using relationships */

let parentObj = document.querySelector('.parent');

//gives html collection from parentObj
let childHtmlCollection = parentObj.children;

//iterating over html collection using for of loop
for (let item of childHtmlCollection) {
    item.style.color = "orange";
    item.style.padding = "2px";
}

//getting the first child from an parentObj
let firstChild = parentObj.firstElementChild;
let lastChild = parentObj.lastElementChild;

//reaching the parent from children
parentObj = firstChild.parentElement;

//reaching siblings from children
let sibling = firstChild.nextElementSibling;



/**
 * Child nodes are nodes which are present inside an element for ex: if we see parent class in html then we can say
 * classes like child1, child2 .... etc are its child nodes, however enters, comments etc are also taken into consideration
 * while considering child nodes.
 */

let mainNode = document.querySelector(".parent");
console.log(mainNode.childNodes);




/**Creating a element in document */

// creating a new div and giving it some id, class name some styling and some text and then appending it to document.

let div = document.createElement("div");
div.className = "customDiv";
div.id = Math.round(Math.random() * 10 + 1);
div.style.backgroundColor = "blue";
div.style.color = "black";
let textNode = document.createTextNode("This is a custom div via script")
div.appendChild(textNode);

document.body.appendChild(div);


// appending more li into a ul via a function which takes langName as parameter and use that as text in li.
document.querySelector(".language1").style.background = "#212121"

function createListElements(languageName) {
    let ulLanguageList = document.querySelector(".languageList");
    let li = document.createElement('li');
    let textNode = document.createTextNode(languageName);
    li.appendChild(textNode);
    ulLanguageList.appendChild(li);
}

createListElements("java");
createListElements("typescript");
createListElements("python");





/**Editing an existing element in document */

//editing an existing list item in ul via creating a new li and then replacing the old with new.
let individualLang = document.querySelector('.languageList :nth-child(2)');
let newLi = document.createElement('li');
newLi.appendChild(document.createTextNode("maje lo"));
individualLang.replaceWith(newLi);


// editing an list item by directly changing the outerHTML of it.
let firstChildList = document.querySelector('.languageList :first-child');
firstChildList.outerHTML = '<li>changed and edited item</li>'


/**Deleting an existing element in document */
let lastChildList = document.querySelector('.languageList :last-child');
lastChildList.remove();



