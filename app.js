// app.js
const checkboxes = document.querySelectorAll('.task-checkbox');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    const taskItem = event.target.closest('.task-item');
    if (taskItem) {
      taskItem.classList.toggle('completed', event.target.checked);
    }
  });
});