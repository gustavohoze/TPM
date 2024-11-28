export const addTask = (tasks, newTask) => {
  return [...tasks, newTask];
};

export const renderTasks = (tasks, container) => {
  container.innerHTML = "";
  tasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.innerHTML = `<span>${task.title} </span> <button data-id="${task.id}" class="delete-btn">Delete</button>`;
    container.appendChild(taskElement);
});
};

export const removeTask = (tasks, id)=>{
    return tasks.filter(task => task.id !== id);
}