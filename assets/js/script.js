'use strict';



// criando uma funcao pra ativar o element toggle
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// variaveis do sidebar
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// callback na funcionalidade do toggle sidebar p/ mobile 
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// variaveis de navegacao da pagina, data-nav-link menu e data-page na article
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// adicionando evento pros nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
     //entao for percorre toda func pages, se innerHTML for pega, sera adicionado active
     // no parametro e a pagina ira renderizar
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}