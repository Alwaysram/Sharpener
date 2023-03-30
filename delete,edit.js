var form =document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')

// Form Submit event
form.addEventListener('submit',addItem);


/////2///////delete Item
itemList.addEventListener('click',removeItem);
//filter event
filter.addEventListener("keyup",filterItems);

//add Item
function addItem(e){
    e.preventDefault();
    //console.log(1)
   /// ///get input value
   var  newItem = document.getElementById('item').value;
   ////create new li element
   var li = document.createElement('li');
   //add class
   li.className = 'list-group-item';
   //console.log(li);

   //add text node with input value
   li.appendChild(document.createTextNode(newItem));
   itemList.append(li);

//create del button element
var deleteBtn= document.createElement('button');
//add class to delete botton
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
//append text node
deleteBtn.appendChild(document.createTextNode('x'))
//append button to li
li.append(deleteBtn);

itemList.append(li);

var editBtn= document.createElement('button');
//add class to delete botton
editBtn.className = 'btn';
//append text node
editBtn.appendChild(document.createTextNode('Edit'))
//append button to li
li.append(editBtn);

itemList.append(li);


}

///function to remove item
function removeItem(e){
   // console.log(1)
   if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);

    }
   }
}
///fiter items
function filterItems(){
    //
}