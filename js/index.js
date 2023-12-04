const navToggle = document.querySelector(".nav_toggle input");
const nav = document.querySelector("nav .navmenu");

navToggle.addEventListener("click", function () {
  nav.classList.toggle("active");
});

const accountToggle = document.querySelector(".account_toggle input");
const account = document.querySelector("nav .accountmenu");

accountToggle.addEventListener("click", function () {
  account.classList.toggle("active");
});

const person = document.getElementById("person");
const crosstoggle = document.querySelector(".account_toggle input");

let accountimage = true;

crosstoggle.addEventListener("click", function () {
  if (accountimage) {
    person.src = "img/cross.png";
  } else {
    person.src = "img/person.png";
  }
  accountimage = !accountimage;
});
