let nav = document.getElementById("sidebar");
let openbtn = document.getElementById("openbtn");
let closebtn = document.getElementById("closebtn");
let overlay = document.getElementById("overlay");

//navigation
//openNav
openbtn.addEventListener("click", () => {
  nav.style.transform = "translate(0)";
  nav.style.boxShadow = "5px 0px 15px rgba(0, 0, 0, 0.5)";

  //overlay toggle
  overlay.style.height = '100vh';
  overlay.style.zIndex = "2";
  overlay.style.opacity = "1";
});

//closeNav
closebtn.addEventListener("click", () => {
  nav.style.transform = "translate(-100%)";
  nav.style.boxShadow = "0px 0px 0px #222";

  //overlay off
  overlay.style.height = '0';
  overlay.style.zIndex = "0";
  overlay.style.opacity = "0";
});

overlay.addEventListener("click", () => {
  nav.style.transform = "translate(-100%)";
  nav.style.boxShadow = "0px 0px 0px #222";

  overlay.style.zIndex = "0";
  overlay.style.opacity = "0";
});

//goToTop btn
let goToTop = document.getElementById("goToTop");

window.onscroll = function () {
  scrollAppear();
};

function scrollAppear() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //disappear on very top
    goToTop.style.opacity = "1";
  } else {
    //appear on scroll
    goToTop.style.opacity = "0";
  }
}

goToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
