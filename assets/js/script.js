"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

/**
 * close navbar when click on any navbar links
 */

const navLinks = document.querySelectorAll("[data-nav-link]");

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header active when scroll down
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  window.scrollY > 100
    ? header.classList.add("active")
    : header.classList.remove("active");
};

addEventOnElem(window, "scroll", headerActive);

/**
 * redirectToStore
 */

function redirectToStore() {
  var userAgent = navigator.userAgent;

  if (/Android/i.test(userAgent)) {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.ahyaispmobapp";
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    window.location.href = "https://apps.apple.com/eg/app/byit/id1673127554";
  } else {
    swal({
      title: "Sorry",
      text: "You are opened by browser!",
      buttons: false,
      timer: 2000,
    });
  }
}

/**
 * Popup Video
 */

document.addEventListener("DOMContentLoaded", function () {
  var videoPopup = document.getElementById("videoPopup");
  var videoPlayerPopup = document.getElementById("videoPlayerPopup");
  var openButton = document.getElementById("openButton");

  openButton.addEventListener("click", function () {
    videoPopup.style.display = "block";
    videoPlayerPopup.style.display = "block";
    videoPlayerPopup.play();
  });

  videoPopup.addEventListener("click", function () {
    videoPopup.style.display = "none";
    videoPlayerPopup.style.display = "none";
    videoPlayerPopup.pause();
  });
});

/**
 * accordion toggle
 */

const accordionAction = document.querySelectorAll("[data-accordion-action]");

const toggleAccordion = function () {
  this.classList.toggle("active");
};

addEventOnElem(accordionAction, "click", toggleAccordion);