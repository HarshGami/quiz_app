const highsocres = JSON.parse(localStorage.getItem("highscores")) || [];
let list = document.getElementById('list');

list.innerHTML = highsocres.map(listitem =>{
    return `<li class="listitem">${listitem.name}-${listitem.marks}</li>`;
}).join("");

function delet() {
    localStorage.clear();
    list.innerHTML = "";
  }