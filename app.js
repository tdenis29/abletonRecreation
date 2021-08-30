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

function openTab(evt, tabNum) {
  // Get all elements with class="tabcontainer" and hide them
  let tabcontainers = document.getElementsByClassName("tabcontainer");
  for (let i = 0; i < tabcontainers.length; i++) {
    tabcontainers[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  let tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activated", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabNum).style.display = "flex";
  evt.currentTarget.className += " activated";
}
document.getElementById("tab1link").click();