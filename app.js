//modal
let hamburger = document.getElementById('hamburger');
let modalclosed = true;

hamburger.addEventListener('click', (e) => {
    let overlay = document.getElementById('overlay');
    let logosvg = document.getElementById('logosvg');
    let menusvg = document.getElementById('menusvg');
    logosvg.classList.toggle('modalactive');
    overlay.classList.toggle('hidden');
    modalclosed = !modalclosed;
    if(modalclosed === false){
        menusvg.classList.add('modalactive');
    } else{
        menusvg.classList.remove('modalactive');
    }
})