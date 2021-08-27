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
});
//tabs
function openTab(evt, tabName) {
    // Get all elements with class="tabcontent" and hide them
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" activate", "");
    }
    let tabimg = document.getElementsByClassName('tabimg');
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).classList.add("activate");
    console.log(tabName)
    evt.currentTarget.className += " activated";
  }


