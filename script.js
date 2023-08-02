let tasks = [];
// empty array is created to store task

function addtask() {
    const writetask = document.getElementById("writetask");
    const taskDescription = writetask.value.trim();
  
    //gets the input field value and its gets trimmed

    if (taskDescription === "") {
      return;
    }

    const task = {
      description: taskDescription,  // create a new task object with description and completed status
      completed: false,
    };

    tasks.unshift(task);
    writetask.value = "";
    renderTasks();
}


  function toggleTask(index) {
    tasks[index].completed =  !tasks[index].completed; // toggle the completed status of the task at the given index
    renderTasks();
  }

function deleteTask(index) {
   tasks.splice(index, 1); //remove the task from the index of the given array
   renderTasks();
}

function renderTasks() {
   const tasklist = document.getElementById("tasklist");  // this will get the element which has list of task
   tasklist.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task");
    if (task.completed) {
      taskItem.classList.add("completed-task");
    }

    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.checked = task.completed;
    taskCheckbox.addEventListener("change", () => toggleTask(index));

    const taskDescription = document.createElement("span");
    taskDescription.textContent = task.description;

    const deleteButton = document.createElement("button");
     deleteButton.textContent = "Delete";
     deleteButton.classList.add("delete-btn");
     deleteButton.addEventListener("click", () => deleteTask(index));

     taskItem.appendChild(taskCheckbox);
     taskItem.appendChild(taskDescription);
     taskItem.appendChild(deleteButton);

     tasklist.appendChild(taskItem);
  });

  const taskcount = document.getElementById("taskcount");
  taskcount.textContent = `Total Tasks: ${tasks.length}`;
}

renderTasks();
//initial rendering of task when web pages loads.