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
//  var headerTitle=document.getElementById('header-title');
//  var header=document.getElementById('main-header');
//  var ul=document.getElementById('items');
//  var div=document.getElementById('main');

// // console.log(headerTitle);
// // headerTitle.textContent="head";
// // headerTitle.innerText="naresh";
// //headerTitle.innerHTML ='<h3>hello</h3>';
// header.style.border='solid 10px #000';
// ul.style.color='green';
// div.style.color='green';


//get elements by class name//
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);
// items[2].textContent = 'item-3';
// items[2].style.fontWeight ='bold';
// items[2].style.backgroundColor='#3a5311';
// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor ='orange';
// }
// for(var i=0;i<items.length;i++){
    // items[i].style.fontWeight='bold';
// }
//getElementsByTagName
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'item-2';
// li[1].style.fontWeight ='bold';
// li[1].style.backgroundColor='#3a5311';
// for(var i=0;i<li.length;i++){
//      li[i].style.fontWeight='bold';
// }
// var items = document.getElementsByTagName('');
// console.log(li);
// console.log(li[1]);



//queryselector//
// var header = document.querySelector('#main-header')
// header.style.borderBottom='solid 5px #ccc';


// var input = document.querySelector('input');
// input.value='Hello world'

// var submit = document.querySelector('input[type="submit"]')
// submit.value="SEND"


// var item = document.querySelector('.list-group-item');
// item.style.color = 'violet';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color='green';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='green';
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color='rgba(255,0,0,0)';


// // //querySelectorForAll/
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent ='Hello';

// var odd= document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');
// for(var i=0; i<odd.length;i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }











