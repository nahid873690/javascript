const loadTodo = ()=>{
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayTodo(data));
};

const displayTodo = (todos) => {
    // 
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerHTML = "";

    todos.forEach((todo) => {
        console.log(todo);

        const todoCard = document.createElement("div");
        todoCard.innerHTML =`
    };
}
