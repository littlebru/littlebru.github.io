/* Abrir e fechar o menu */
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/* Abrir Menu Pagina web e Mobile */
// Validação se a constante existe
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Fechar Menu Pagina Web */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/* Fechar Menu em aparelho Mobile */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Quando se clica em quqlquer nav_link, é removida a classe "show-menu" da tag
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
