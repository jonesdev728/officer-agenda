// Utility: convert officer name to safe DOM id
function officerId(name) {
  return 'officer-' + name.toLowerCase().trim().replace(/\s+/g, '-');
}

function addTask() {
  const officerInput = document.getElementById('officerName');
  const taskInput    = document.getElementById('taskName');
  const dateInput    = document.getElementById('taskDate');

  const officerName = officerInput.value.trim();
  const taskName    = taskInput.value.trim();
  const dueDate     = dateInput.value;

  if (!officerName || !taskName || !dueDate) return;

  const id = officerId(officerName);

  // Create officer card if it doesn't exist
  let officerDiv = document.getElementById(id);
  if (!officerDiv) {
    officerDiv = createOfficerSection(officerName, id);
  }

  const taskList = officerDiv.querySelector('.task-list');

  const taskDiv = document.createElement('div');
  taskDiv.className = 'task';
  taskDiv.innerHTML = `
    <span>${taskName} (Due: ${dueDate})</span>
    <input type="checkbox" onchange="toggleComplete(this)" />
    <button onclick="deleteTask(this)">Delete</button>
  `;
  taskList.appendChild(taskDiv);

  // Reset form
  taskInput.value = '';
  dateInput.value = '';
}

function createOfficerSection(name, id) {
  const container = document.getElementById('officersContainer');

  const officerDiv = document.createElement('div');
  officerDiv.className = 'officer';
  officerDiv.id = id;

  const heading = document.createElement('h2');
  heading.textContent = name;
  officerDiv.appendChild(heading);

  const taskList = document.createElement('div');
  taskList.className = 'task-list';
  officerDiv.appendChild(taskList);

  container.appendChild(officerDiv);
  return officerDiv;
}

function deleteTask(button) {
  button.parentElement.remove();
}

function toggleComplete(checkbox) {
  const span = checkbox.parentElement.querySelector('span');
  span.classList.toggle('completed', checkbox.checked);
}
