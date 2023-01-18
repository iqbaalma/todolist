const form = document.querySelector("#list");
const list = document.querySelector("#notes");
const inputList = document.querySelector("#inputList");



form.addEventListener("submit", function (e) {
  e.preventDefault();
  const noteValue = inputList.value;
  const newList = document.createElement("li");
  newList.innerText = noteValue;
  list.append(newList);
  inputList.value = "";
});
