//TERSERVING THE DOM//
var itemList = document.querySelector('#items');
//parentnode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'red'
// console.log(itemList.parentNode.parentNode.parentNode);


//parentElement
//console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'red'
// console.log(itemList.parentElement.parentElement.parentElement);

/*difference between parentNode and parentElement*/

///


//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //firstChild
// console.log(itemList.firstChild);

// //fistElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Naresh'

//LastChild
// console.log(itemList.lastChild);
// itemList.lastChild.style.color='red';


// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild5.style.backgroundColor ='blue';

//nextsiblings
// console.log(itemList.nextSibling);
// itemList.nextSibling.style.textContent = 'hello';

// console.log(itemList.nextSiblingElement);
// itemList.nextSiblingElement.style.textContent = 'hello';

///previousSibling
// console.log(itemList.previousSibling)
// itemList.previousSibling.style.textContent = 'hello';


// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//createElement
var newDiv= document.createElement('div')

//add a class
newDiv.className ='hello'

//add id
newDiv.id = 'hello1'

//ad attribute
newDiv.setAttribute('title','Hello div');

//create your textNode

var newDivText = document.createTextNode('HEllo ');

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');



console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);








