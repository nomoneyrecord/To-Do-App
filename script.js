//Delcare all necessary constants and grab needed IDs

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
  const newTask = document.createElement("li");
  const paragraph = document.createElement("p");
  paragraph.textContent = taskValue;
  newTask.appendChild(paragraph);
  taskList.appendChild(newTask);
 
}

//Add event listener that calls a click function to addTaskButton 
//Confirm a return value from the input and terminate once designated true/false

//Create a function that returns the input as a new 'li' in the 'ul' element. 

//Add radio buttons at the beginning to these new listed items. 

//When radio button is checked, the list item font gets a strike through 
//Add delete button "(X)" to the right of the list item
//Wire up delete button to delete that list item