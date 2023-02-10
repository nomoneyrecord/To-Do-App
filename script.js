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
  deleteButton.textContent =  "Delete" ;
  deleteButton.style.textDecoration = "none";



  radioBtn.addEventListener("click", function(){
    if(radioBtn.checked) {
      paragraph.style.textDecoration = "line-through";
    } else {
      paragraph.style.textDecoration = "none";
    }
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







