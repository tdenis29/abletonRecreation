//modal
let hamburger = document.getElementById('hamburger');
let modalclosed = true;

hamburger.addEventListener('click', (e) => {
    let overlay = document.getElementById('overlay');
    let logosvg = document.getElementById('logosvg');
    logosvg.classList.toggle('modalactive');
    overlay.classList.toggle('hidden');
    modalclosed = !modalclosed;
    if(modalclosed === false){
        hamburger.classList.add("is-active");
        hamburger.classList.add("modalactive");
        

    } else{
        hamburger.classList.remove('is-active');
        hamburger.classList.remove("modalactive");
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

//invert cg arrow details open
let summarys = document.getElementsByClassName('accordian-title')
let summaryArr = Array.from(summarys);
console.log(summaryArr)
summaryArr.forEach(summary => {
  summary.addEventListener('click', (e) => {
    if(e.target.id === "details1" || e.target.id === "detail1arrow"){
      document.getElementById('detail1arrow').classList.toggle('flippy');
    } 
    if(e.target.id === "details2" || e.target.id === "detail2arrow"){
      document.getElementById('detail2arrow').classList.toggle('flippy');
    } 
    if((e.target.id === "details3" || e.target.id === "detail3arrow")){
      document.getElementById('detail3arrow').classList.toggle('flippy');
    } 
    if((e.target.id === "details4" || e.target.id === "detail4arrow")){
      document.getElementById('detail4arrow').classList.toggle('flippy');
    } 
    

  })
});
 
