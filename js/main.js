const menuBtn = document.querySelector('.menu');
let menuOpen = false;

menuBtn.addEventListener('click',() => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen= true;
        document.getElementById("menu-txt").innerHTML = "close";
    } else {
        menuBtn.classList.remove('open');
        menuOpen=false;
        document.getElementById("menu-txt").innerHTML = "menu";
    }
});
function myFunction(){
  var x = document.getElementById("myNav");
  if(x.style.display === "block"){
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

window.addEventListener('scroll', e => {
  var el = document.getElementById('jsScroll');
  if(window.scrollY > 200) {
    el.classList.add('visible');
  } else {
    el.classList.remove('visible');
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}