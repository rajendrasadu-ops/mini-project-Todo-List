/// Temporary storage for todo items

let todos = [];

function addTodos() {
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");

    /// Validation
    if (todoInput.value === "" || todoDate.value === "") {
        alert("Please enter a to-do item and select a date.");
    } else {
        // Add new todo item to the list
        todos.push({ text: todoInput.value, date: todoDate.value });
        todoInput.value = "";
        todoDate.value = "";

        renderTodos();
    }
}

/// Function to render to-do items to the DOM would go here
function renderTodos() {
    // Get the todo list container
    const todoList = document.getElementById("todo-list");

    // Clear existing list
    todoList.innerHTML = "";

    // Render each todo item
    todos.forEach((todo, _) => {
        todoList.innerHTML += `
        <li>
            <P class="text-2xl">${todo.text} <span class="text-sm text-gray-500">(${todo.date})</span></P>
            <hr />
        </li>`;
    });
}

/// Function to clear all to-do items
function clearTodos() {
    todos = [];
    renderTodos();
}

/// Function to sort to-do items by date
function sortTodosByDate() {
    // Sort the array in ascending order
    todos.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Re-render the list
    renderTodos();
}

/// Checkboxes of completed tasks would go here
function renderTodos() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    todos.forEach((todo, index) => {
        todoList.innerHTML += `
        <li class="flex items-center gap-3">
            <input 
                type="checkbox" 
                ${todo.completed ? "checked" : ""}
                onclick="toggleCompleted(${index})"
                class="w-5 h-5"
            />

            <p class="text-2xl ${todo.completed ? 'line-through text-gray-400' : ''}">
                ${todo.text}
                <span class="text-sm text-gray-500">(${todo.date})</span>
            </p>
        </li>
        <hr/>
        `;
    });
}

/// Function to toggle the completed status of a todo item
function toggleCompleted(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}
