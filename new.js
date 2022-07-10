const form = document.querySelector("form");
const ul = document.querySelector("ul");
const taskNumber = document.querySelector("h1 span");
const listItems = document.getElementsByClassName("task");
const input = document.querySelector("input");
const toDoList = [];

const removeTasks = (e) => {
   const index = e.target.parentNode.dataset.key;
   toDoList.splice(index, 1);
   taskNumber.textContent = listItems.length;
   renderList();
   taskNumber.textContent = listItems.length;
}

const renderList = () => {
   ul.textContent = "";
   toDoList.forEach((list, key) => {
      list.dataset.key = key;
      ul.appendChild(list);
   });
}

const addTask = (e) => {
   e.preventDefault();
   const titleTask = input.value;
   if (titleTask === "") {
      return;
   }
   const task = document.createElement("li");
   task.className = "task";
   task.innerHTML = `${titleTask} <button>usuń</button>`;
   toDoList.push(task);
   renderList();
   ul.appendChild(task);
   input.value = "";
   taskNumber.textContent = listItems.length;
   task.querySelector("button").addEventListener('click', removeTasks);
}

form.addEventListener('submit', addTask);
