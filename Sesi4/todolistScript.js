import { addTask, removeTask, renderTasks } from "./taskManager.js";

let tasks = [
    {
      id: 1,
      title: "Learn Javascript",
      completed: false,
    },
    {
      id: 2,
      title: "Do homework",
      completed: true,
    },
    {
      id: 3,
      title: "Eat sushi",
      completed: false,
    },
  ];

const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");

taskForm.addEventListener('submit', event=>{
    event.preventDefault();
    const newTask = {id: Date.now(), title: taskInput.value};
    tasks = addTask(tasks, newTask);
    taskInput.value ="";
    renderTasks(tasks, taskList);
})

taskList.addEventListener('click', event=>{
    if(event.target.classList.contains("delete-btn")){
        const id = parseInt(event.target.dataset.id, 10)
        tasks = removeTask(tasks, id);
        renderTasks(tasks, taskList);
    }
})

renderTasks(tasks, taskList);