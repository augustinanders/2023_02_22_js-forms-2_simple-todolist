console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
  addToDo();

  form.reset();
  form.headline.focus();
});

/* function addToDo() {
  const listItem = document.createElement("li");

  todoList.append(listItem);
  listItem.innerHTML = `
  <h2>${form.headline.value}</h2>
  <p>${form.task.value}</p>
  `;
} */

// long version:

function addToDo() {
  const listItem = document.createElement("li");
  const heading = document.createElement("h2");
  const task = document.createElement("p");

  heading.textContent = form.headline.value;
  task.textContent = form.task.value;

  todoList.append(listItem);
  listItem.append(heading, task);
}
