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
    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('class', 'fa-regular fa-trash-can delete-Btn')

    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(deleteBtn);
    li.appendChild(p);
    li.appendChild(btnDiv);
    parent.appendChild(li);
    }else{
        console.log('Enter todo first');
    }

}

function deleteAll(){
    var childList = parent.children;
    // console.log(childList);
    childList.remove();
    parent.remove();
}