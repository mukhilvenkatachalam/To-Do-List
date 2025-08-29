let todoList = JSON.parse(localStorage.getItem('todoList')) || [
    {
        name: 'Trip to chennai',
        dueDate: '2025-08-30'
    },
    {
        name: 'going home',
        dueDate: '2025-09-27'
    }
];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const { name, dueDate } = todoList[i];
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todoList.splice(${i}, 1);
                saveToLocalStorage();
                renderTodoList();
            " class="delete-todo-button">Delete</button> 
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    if (name.trim() !== '' && dueDate !== '') {
        todoList.push({ name, dueDate });
        saveToLocalStorage();
    }

    inputElement.value = '';
    renderTodoList();
}

function saveToLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}
