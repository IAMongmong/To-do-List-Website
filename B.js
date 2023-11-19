$(document).ready(function() {
    const newTaskInput = $('#newTask');
    const addTaskButton = $('#addTask');
    const taskList = $('#taskList');

    addTaskButton.on('click', addTask);

    function addTask() {
        const taskText = newTaskInput.val().trim();
        if (taskText !== '') {
            const li = $('<li>').append(
                $('<span>').text(taskText),
                $('<button>').addClass('edit').text('Edit'),
                $('<button>').addClass('delete').text('Delete')
            );
            taskList.append(li);
            newTaskInput.val('');
            li.find('.edit').on('click', function() {
                editTask(li);
            });
            li.find('.delete').on('click', function() {
                deleteTask(li);
            });
        }
    }

    function editTask(li) {
        const taskText = li.find('span').text();
        const updatedTask = prompt('Edit Task:', taskText);
        if (updatedTask !== null) {
            li.find('span').text(updatedTask);
        }
    }

    function deleteTask(li) {
        const confirmDelete = window.confirm('Are you sure you want to delete this task?');
        if (confirmDelete) {
            li.remove();
        }
    }
});
