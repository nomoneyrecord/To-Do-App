

const addTaskButton = document.getElementById("add-task");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list")



addTaskButton.addEventListener("click", function(e) {
  e.preventDefault();
  const taskValue = taskInput.value;
  if (!taskValue) return; 

  createList(taskValue);
});



function createList(taskValue){
  const radioBtn = document.createElement("input");
  radioBtn.type = "radio";
  const newTask = document.createElement("li");
  const paragraph = document.createElement("p");
  paragraph.textContent = taskValue;


  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

//Wire up Radio button with strike through
  radioBtn.addEventListener("click", function(){
    const text = newTask;
    const result = text.strike();
    document.getElementById().innerText = result;
  });
  

  deleteButton.addEventListener("click", function(){
    taskList.removeChild(newTask);
  });   
  newTask.appendChild(radioBtn);
  newTask.appendChild(paragraph);
  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);
  taskInput.value = "";
}







