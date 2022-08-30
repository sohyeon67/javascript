const toDoForm = document.getElementById("todo-form");
const ToDoInput = document.querySelector("#todo-form input");
//toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //object array

function saveToDos() {
    //localStorage.setItem(TODOS_KEY, toDos); --> getItem(TODOS_KEY) : 'a,b,c'
    
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
    //obect or array -> string
    //getItem(TODOS_KEY) : '["a","b","c"]'
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = ToDoInput.value;
    ToDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); //String->array
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);  //array의 각 item에 대해 function을 실행
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
}