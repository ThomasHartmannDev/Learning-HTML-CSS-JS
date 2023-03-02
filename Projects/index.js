const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task-btn");
const taskList = document.querySelector("#task-list");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

let darkModeEnabled = false;

addTaskBtn.addEventListener("click", addTask);
darkModeToggle.addEventListener("click", toggleDarkMode);

function addTask() {
  if (taskInput.value === "") return;

  const task = document.createElement("li");
  task.classList.add("task");

  const taskText = document.createElement("span");
  taskText.innerText = taskInput.value;

  const taskActions = document.createElement("div");
  taskActions.classList.add("task-actions");

  const doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  doneBtn.addEventListener("click", markTaskAsDone);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", deleteTask);

  taskActions.append(doneBtn, deleteBtn);
  task.append(taskText, taskActions);
  taskList.append(task);

  taskInput.value = "";
}

function markTaskAsDone(event) {
  const task = event.target.parentElement.parentElement;
  task.classList.toggle("done");
}

function deleteTask(event) {
  const task = event.target.parentElement.parentElement;
  task.remove();
}

function toggleDarkMode() {
  darkModeEnabled = !darkModeEnabled;
  document.body.classList.toggle("dark-mode");
}
