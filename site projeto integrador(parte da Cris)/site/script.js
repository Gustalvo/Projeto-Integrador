document.addEventListener('DOMContentLoaded', function(){
    const burguer = document.getElementById("burguer");
    const menu = document.getElementById("menu");

    burguer.addEventListener('click', function(){
        menu.classList.toggle('open');
        
    });
});