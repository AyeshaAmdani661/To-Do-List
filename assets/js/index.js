const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")
const add = document.querySelector(".add");
getItemValue = () =>{
    addToDo(item.value);
    item.value = "";
}
add.addEventListener('click', ()=>{
    getItemValue();
});
item.addEventListener(
    "keyup",
    function(event) {
        if (event.key == "Enter") {
            getItemValue();
        }
    }
)
const addToDo = (item) => {
    var listItem = document.createElement("li");
    listItem.innerHTML = `
         ${item}
        <i class="fa-solid fa-pen edit"></i>
        <i class="fas fa-times delete"></i>        
    `;
    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    )
    listItem.querySelector(".delete").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem)
}