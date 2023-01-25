'use strict';



// criando uma funcao pra ativar o element toggle
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// variaveis do sidebar
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// callback na funcionalidade do toggle sidebar p/ mobile 
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// -     ///////////////////  trabalhando com o portfolio

// criando as variaveis de selecao
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// Agora adicionando evento para todos os itens
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    //entao dar a funcao de escolher uma opcao no select:

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}
// agora filtrando as variaveis dentro do select
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {
         //entao se ao escolher o valor, filtro active
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// agora adicionando a funcionalidade aos botoes de filtro em telas maiores
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
       //filtro para evento click, acionar arrow function pras variaveis de selecao de valor
  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}


// -     ///////////////////   trabalhando com o form

// Variaveis do formulario, pegando os data-form de cada elemento
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");


// adicionando um evento pra todos os inputs de form
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // checando a validacao dos inputs pra clicar em enviar
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

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
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}










///// alterar as cores da pagina


//     // Adiciona um evento de clique ao botão
//     function toggleDark() {
//       document.body.style.backgroundColor = "black";
//       document.querySelector("aside").style.backgroundColor = "black";
//       document.querySelectorAll("p").forEach(p=>p.style.color = "white");
//       document.querySelector(".title").style.backgroundColor = "green";

     
// // document.querySelectorAll(".contact-item").forEach(icon => icon.style.backgroundColor = "black");
// document.querySelectorAll("ion-icon").forEach(icon => icon.style.color = "white");

//     }

// function toggleLight() {
  
//       document.body.style.backgroundColor = "var(--smoky-black)";
//       document.querySelector(".sidebar").style.backgroundColor = "rgb(245, 241, 245)";
//       document.querySelector("article").style.backgroundColor = "rgb(245, 241, 245)";
     
//       document.querySelector(".icon-box ").style.Color = "rgb(214, 212, 212)";
//       document.querySelector(".contacts-list").style.Color = "color:var(--onyx)";
//       document.querySelector(".icon-box").style.Color = "color:var(--onyx)";

//       document.querySelectorAll("p").forEach(p=>p.style.color = "black");
//       document.querySelector(".title").style.backgroundColor = "var(--onyx)";
//       document.querySelector(".title").style.color = "white";

//     }
