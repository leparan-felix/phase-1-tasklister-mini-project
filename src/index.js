document.addEventListener("DOMContentLoaded", () => {
  // Select the form
  const form = document.getElementById("create-task-form");

  // Add event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the page from refreshing

    // Get the task input value
    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      addTaskToList(taskText);
      taskInput.value = ""; // Clear input field after submission
    }
  });
});

// Function to add task to list
function addTaskToList(task) {
  const taskList = document.getElementById("tasks");

  // Create new list item
  const li = document.createElement("li");
  li.textContent = task;

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.addEventListener("click", () => li.remove());

  // Append task and delete button to list item
  li.appendChild(deleteButton);
  taskList.appendChild(li);
}
