const botao = document.querySelector(".dropdown-btn");
const menu = document.querySelector(".dropdowncontent");

botao.addEventListener("click", function(event){

    event.stopPropagation();

    menu.classList.toggle("show");
});

document.addEventListener("click", function(event){

    if (
        !menu.contains(event.target) &&
        !botao.contains(event.target)
    ){
        menu.classList.remove("show");
    }

});