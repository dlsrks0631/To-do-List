const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input"); // === document.querySelector("#todo-form input");
const toDolist = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// JSON.stringify(toDos) -> 중복을 허용하기 위해 toDos 를 문자열로 저장해줌 ex) "a","b","c"
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // li.id -> string , toDo.id -> number
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDolist.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// parse -> localStorage에서 가져온 string을 JS object로 바꿔줌
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; // 이전 데이터를 복원하기 위해
  parsedToDos.forEach(paintToDo);
}
