var input = document.getElementById("user-input");
var parent = document.getElementById("parent-div");

function addLi(){
    if(input.value.length > 0){
        var li = document.createElement("div");
    li.setAttribute('class', 'li');

    var p = document.createElement("p");
    p.innerHTML = input.value;

    var btnDiv = document.createElement("div");
    btnDiv.setAttribute('class', 'btn-div');    
    
    var editBtn = document.createElement("button");
    editBtn.setAttribute('class', 'fa-regular fa-pen-to-square edit-Btn')
    editBtn.setAttribute('onclick', 'editTodo(this)')

    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('class', 'fa-regular fa-trash-can delete-Btn')
    deleteBtn.setAttribute('onclick', 'deleteTodo(this)')

    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(deleteBtn);
    li.appendChild(p);
    li.appendChild(btnDiv);
    parent.appendChild(li);
    }else{
        alert('Enter todo first');
    }
    input.value = "";
}

function deleteAll(){
    console.log(parent.firstElementChild);

    for(var i=0; i<parent.children.length; i++){
        parent.lastElementChild.remove();
    }
}


function deleteTodo(ele){
    var li = ele.parentNode.parentNode;
    li.remove();
}

function editTodo(ele){
    var liText = ele.parentNode.parentNode.firstElementChild.innerHTML;
    var edited = prompt("edit here", liText);
    if(edited.length>0){
        ele.parentNode.parentNode.firstElementChild.innerHTML = edited;
    }
}