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