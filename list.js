const form = document.querySelector("#list");
const list = document.querySelector("#notes");
const input1 = document.querySelector("#inputTitle");
const input2 = document.querySelector("#inputList");

let title = document.querySelector("#title");

// input.addEventListener("change", (e) => {
//   console.log("nilai berubah");
// });

input1.addEventListener("input", (e) => {
  title.innerText = input1.value;
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const noteValue = input2.value;
  const newList = document.createElement("li");
  newList.innerText = noteValue;
  list.append(newList);
  input2.value = "";
});

list.addEventListener("click", (e) => {
  e.target.remove();
});
