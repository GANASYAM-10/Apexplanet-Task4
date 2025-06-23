// Load tasks from localStorage when the page loads
window.onload = function () {
  loadTasks();
};

// Add task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task !== "") {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <button class="delete-btn" onclick="deleteTask(this)">🗑</button>
    `;
    taskList.appendChild(li);

    saveTasks();
    taskInput.value = "";
  }
}

// Delete task
function deleteTask(button) {
  const task = button.parentElement;
  task.remove();
  saveTasks();
}

// Save tasks to localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push(li.textContent.replace("🗑", "").trim());
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <button class="delete-btn" onclick="deleteTask(this)">🗑</button>
    `;
    taskList.appendChild(li);
  });
}
