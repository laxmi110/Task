document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Add Task Event
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskName = taskInput.value.trim();
        if (taskName) {
            addTask(taskName);
            taskInput.value = '';
        }
    });

    // Add Task Function
    function addTask(taskName) {
        const li = document.createElement('li');
        li.className = 'task-item';

        li.innerHTML = `
            <span>${taskName}</span>
            <div>
                <input type="checkbox" class="complete-task">
                <button class="delete-btn">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
    }

    // Mark as Completed or Delete Task
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('complete-task')) {
            const taskItem = e.target.closest('li');
            taskItem.classList.toggle('completed');
        }

        if (e.target.classList.contains('delete-btn')) {
            const taskItem = e.target.closest('li');
            taskItem.remove();
        }
    });

    // Filter Tasks 
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterTasks(filter);
        });
    });

    // Filter Task Function
    function filterTasks(filter) {
        const tasks = taskList.childNodes;
        tasks.forEach(task => {
            if (filter === 'all') {
                task.style.display = 'flex';
            } else if (filter === 'completed' && task.classList.contains('completed')) {
                task.style.display = 'flex';
            } else if (filter === 'incomplete' && !task.classList.contains('completed')) {
                task.style.display = 'flex';
            } else {
                task.style.display = 'none';
            }
        });
    }
});
