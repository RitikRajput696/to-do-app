const addItem = document.querySelector(".add-item");
const input = document.querySelector("input");

addItem.addEventListener("click", () => {
  if (input.value !== "") {
    createList();
  }
});
function createList() {
  const listData = input.value;
  const listItem = document.createElement("li");
  listItem.className = "list-item";
  listItem.innerHTML = listData;
  const ul = document.querySelector("ul");
  ul.appendChild(listItem);

  // clear Input field
  input.value = "";
}
