//Examine the document object
// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);


//getElementById
//console.log(document.getElementById('header-title'));
 var headerTitle=document.getElementById('header-title');
 var header=document.getElementById('main-header');
 var ul=document.getElementById('items');
 var div=document.getElementById('main');

// console.log(headerTitle);
// headerTitle.textContent="head";
// headerTitle.innerText="naresh";
//headerTitle.innerHTML ='<h3>hello</h3>';
header.style.border='solid 10px #000';
ul.style.color='green';
div.style.color='green';


//get elements by class name//
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].textContent = 'item-3';
items[2].style.fontWeight ='bold';
items[2].style.backgroundColor='#3a5311';
// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor ='orange';
// }
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}







