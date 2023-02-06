//Delcare all necessary constants and grab needed IDs for creating functionality in the DOM including a 

const addTaskButton = document.getElementById("add-task");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list")

addTaskButton.addEventListener("click", function(e) {
  const taskValue = taskInput.value;
  if (!taskValue) return; 
  console.log(taskValue.value);
});





//Build a function that takes in all variables and generates a new list item when user enters in text box and presses button or enter. Every new item is then add to this list




//Add radio buttons at the beginning to these new listed items. When this radio button is checked, the list item font gets a strike through and call upon a delete button to remove the item from the list

//Add delete button "(X)". When radio button is pressed, delete button appears and can be engaged with by the user. When pressed, list item disappears