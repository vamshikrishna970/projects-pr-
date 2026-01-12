let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.textContent = input.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";




    ul.appendChild(item);
    item.appendChild(deleteBtn);
    console.log(input.value);
    input.value = "";

});

let deleteButtons = document.querySelectorAll(".delete");
for(delbtn of deleteButtons){
    delbtn.addEventListener("click", function(){
     let par = this.parentElement;
     console.log(par);
        par.remove();
    })

}