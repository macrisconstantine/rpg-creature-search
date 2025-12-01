let btnSearch = null; 
let inputSearch = null;

window.onload = () => {
  btnSearch = document.getElementById("search-button");
  inputSearch = document.getElementById("search-input");
}

function search() {
  if (inputSearch.value === "Red") {
    alert("Creature not found");
  }
}