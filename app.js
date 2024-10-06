let ip = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener('click',function(){
    if(ip.value !== ""){
        let item = document.createElement('li');
        item.innerText = ip.value;
        let delBtn = document.createElement('button');
        delBtn.innerText = "delete";
        delBtn.classList.add('delete');
        item.appendChild(delBtn);
        ul.appendChild(item);
        ip.value="";
    }
});

ul.addEventListener("click",function(e){
    if(e.target.nodeName == "BUTTON"){
        let listItem = e.target.parentElement;
        listItem.remove();
    }
})