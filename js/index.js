//кнопки на главной
const buttonAddTask = document.querySelector(".buttons__add");
const buttonAllTask = document.querySelector(".buttons__all");
const buttonProcessTask = document.querySelector(".buttons__process");
const buttonAddCompleted = document.querySelector(".buttons__completed");

const buttonSaveTask = document.querySelector(".new-task__form-save");
const buttonCancelTask = document.querySelector(".new-task__form-cancel");

//врапперы
const wrapAllTasks = document.querySelector(".to-do__tasks");
const wrapNewTask = document.querySelector(".to-do__new-task");

//инпуты
const inputName = document.querySelector(".new-task__name-input");
const inputDescr = document.querySelector(".new-task__description-input");
const inputCategory = document.querySelector(".new-task__category-input");
const inputDate = document.querySelector(".new-task__date-input");
const inputTime = document.querySelector(".new-task__time-input");
const inputPriority = document.querySelector(".new-task__select-input");
const inputProgress = document.querySelector(".new-task__procents-input");

//нажимаем кнопку сделать новую задачу
buttonAddTask.addEventListener("click", () => {
  wrapNewTask.classList.add("new-task_active");
  wrapAllTasks.classList.add("to-do__tasks_disabled");
});

let tasks = [];

if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  console.log("что теперь в tasks");
  console.log(tasks);
} else {
  console.log("в локале ничего нет");
}

buttonSaveTask.addEventListener("click", (e) => {
  e.preventDefault();

  const task = {};

  task.title = inputName.value;
  task.description = inputDescr.value;
  task.category = inputCategory.value;
  task.date = inputDate.value;
  task.time = inputTime.value;
  task.priority = inputPriority.value;
  task.progress = Number(inputProgress.value);
  task.done = false;
  task.id = Date.now();

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  wrapNewTask.classList.remove("new-task_active");
  wrapAllTasks.classList.remove("to-do__tasks_disabled");

  renderTask();
});
