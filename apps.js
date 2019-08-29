//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.colection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#idtask');

//Load All Event listners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
  //Add Task event
  form.addEventListener('submit', addTask);
}

//Add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }

  //Create li Element
  const li = document.createElement('li');
  //Add Class
  li.className = 'collection-item';
  //Create text Node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //Create New Link element
  const link = document.createElement('a');
  //Add Class
  link.className = 'delete-item secondary-content';
  //Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //Append the link to li
  li.appendChild(link);

  //Append the li to the UL
  taskList.appendChild(li);


  //Clear input
  taskInput.value = '';

  e.preventDefault();
}
