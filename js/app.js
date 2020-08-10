/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navbarheader = document.querySelector(".page__header");
//------------------------------------------
const mainsec1 = document.querySelector("#section1");
const mainsec2 = document.querySelector("#section2");
const mainsec3 = document.querySelector("#section3");
//-----------------------------------------
const navbarul = document.querySelector("#navbar__list");
const numofcontainers = document.querySelectorAll(".landing__container");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
//--------------------------------------------------------
function buildnavbar(){
  for (let i = 0; i < numofcontainers.length; i++) {
    let templist = document.createElement("li");
    templist.setAttribute("class", "menu__link");
    let temppar = document.createElement("span");
    temppar.innerHTML = `<p id="s${i + 1}"> Section ${i + 1}</p>`;
    templist.appendChild(temppar);
    navbarul.appendChild(templist);
  }
}
//-----------------------------------------------------

function scrollnavbarhhandler() {
  const numoflist = document.querySelectorAll("span");
  console.log(numoflist.length);
  for (let i = 0; i < numoflist.length; i++) {
    let templi = document.querySelector("#s".concat((i + 1).toString()));
    templi.addEventListener("click", function () {
      numofcontainers[i].scrollIntoView();
    });
    activeclasshandler(i);
  }
}

//-------------------------------
function activeclasshandler(i){
  let templi = document.querySelector("#s".concat((i + 1).toString()));
  templi.addEventListener("click", function () {
    document
      .querySelectorAll("section")
      .forEach((b) => b.removeAttribute("class"));
    document
      .querySelector("#section".concat((i + 1).toString()))
      .setAttribute("class", "your-active-class");
  });
}
//--------------------------------
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const tempsection = document.querySelectorAll('section');
  const navbarsize = navbarheader.getBoundingClientRect();
  for (let i = 0; i < tempsection.length; i++) {
    let rect = tempsection[i].getBoundingClientRect();
    if (document.body.scrollTop + (1.5*navbarsize.height)>= rect.y  ) {
      document
        .querySelectorAll("section")
        .forEach((b) => b.removeAttribute("class"));
      document
        .querySelector("#section".concat((i + 1).toString()))
        .setAttribute("class", "your-active-class");
    }
  }
}

/*
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

buildnavbar();

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
scrollnavbarhhandler();
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
