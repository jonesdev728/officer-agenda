function addTask() {
  const name = document.getElementById('taskName').value.trim();
  const date = document.getElementById('taskDate').value;
  if (!name || !date) return;

  const taskList = document.getElementById('taskList');

  const task = document.createElement('div');
  task.className = 'task';
  task.innerHTML = `
    <span>${name} (Due: ${date})</span>
    <input type="checkbox" onchange="toggleComplete(this)" />
    <button onclick="deleteTask(this)">Delete</button>
  `;
  taskList.appendChild(task);

  // Reset form
  document.getElementById('taskName').value = '';
  document.getElementById('taskDate').value = '';
}

function deleteTask(button) {
  button.parentElement.remove();
}

function toggleComplete(checkbox) {
  const span = checkbox.parentElement.querySelector('span');
  span.classList.toggle('completed', checkbox.checked);
}
