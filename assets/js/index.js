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
    listItem.innerHTML = `${item} <i class="fas fa-times delete"></i><i class="fa-solid fa-check done"></i>`;
    listItem.querySelector(".delete").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )
    listItem.querySelector(".done").addEventListener(
        "click",
        function() {
            listItem.style.backgroundColor='green';
            listItem.style.color='white';
            listItem.style.textDecoration='line-through';
            listItem.style.border='none';
        }
    )
    toDoBox.appendChild(listItem)
}