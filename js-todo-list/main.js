// TO DO
document.addEventListener("DOMContentLoaded", () => {

  const todo = document.querySelector("body");
  const todoList = document.querySelector("ul");
  
  todo.addEventListener("click", (e) => {
    if (e.target && e.target.className === "checked") {
      e.target.classList.remove("checked")
    }
    else if (e.target.className === ""){
      e.target.classList.add("checked")
    }
    else if (e.target.className === "close") {
      e.target.parentNode.remove();
    }
    else if (e.target.className === "addBtn") {
      // 新增任務
      const todo_item = document.createElement("li");
      todo_item.innerText = input.value;
      todoList.appendChild(todo_item);
      // 任務刪除
      const closebtn = document.createElement("span");
      closebtn.innerText = "x";
      closebtn.className = "close";
      todo_item.appendChild(closebtn);
    }
  })
})