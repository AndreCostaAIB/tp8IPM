document.getElementById("home").addEventListener("click", change_page_home);

function change_page_home(){
  window.location.href = "index.html";
} 

document.getElementById("saved").addEventListener("click", change_page_saved);

function change_page_saved(){
  window.location.href = "saved.html";
} 

document.getElementById("notifications").addEventListener("click", change_page_notifications);

function change_page_notifications(){
  window.location.href = "notifications.html";
} 

document.getElementById("filter").addEventListener("click", change_page_filter);

function change_page_filter(){
  window.location.href = "filter.html";
} 

function goto_noticia(x) {
  window.location.href = "noticias_html/noticia" + x + ".html";
}

document.getElementById("adicionar").addEventListener("click", criarPasta);

function criarPasta(){
    var nome = prompt("Qual o nome da pasta?", "Pasta ");
    var myDiv = document.getElementById("mainDiv");
    var newDiv = document.createElement("div");
    var newH4 = document.createElement("h4");
    var icon = document.createElement("i");
    icon.className = "fas fa-folder-open";
    newH4.textContent = nome;
    newDiv.className = "item";
    newDiv.appendChild(newH4);
    newDiv.appendChild(icon);
    myDiv.appendChild(newDiv);
}

function certHover(x){ 
  document.getElementById("not" + x).onclick = null;
}

function certNotHover(x) {
  document.getElementById("not" + x).onclick = function() { goto_noticia(x) };
}

function cert() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}


function go_to_destaques() {
  window.location.href = "destaques.html";
}

function go_to_ultimas() {
  window.location.href = "ultimas.html";
}