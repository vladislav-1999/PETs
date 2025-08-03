"use strict";

const preloader = document.querySelector(".preloader");

const header = document.querySelector(".header");
const headerNav__projects = document.querySelector(".header-nav__projects");
const headerNav__projectsList = document.querySelector(
  ".header-nav__projects-list"
);
const headerNav__stack = document.querySelector(".header-nav__stack");
const headerNnav__stackList = document.querySelector(".header-nav__stack-list");
const headerNav__realProjects = document.querySelector(
  ".header-nav__real-projects"
);
const headerNav__realProjectsList = document.querySelector(
  ".header-nav__real-projects-list"
);

const home_info__about_title = document.querySelector(
  ".home-info__about-title"
);

const home_info__about_text = document.querySelector(".home-info__about-text");

const home_info__tasks = document.querySelector(".home-info__tasks-block");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }
});

headerNav__projects.addEventListener("mouseover", () => {
  headerNav__projectsList.classList.remove("hidden");
});

headerNav__projects.addEventListener("mouseout", () => {
  headerNav__projectsList.classList.add("hidden");
});

headerNav__stack.addEventListener("mouseover", () => {
  headerNnav__stackList.classList.remove("hidden");
});

headerNav__stack.addEventListener("mouseout", () => {
  headerNnav__stackList.classList.add("hidden");
});

headerNav__realProjects.addEventListener("mouseover", () => {
  headerNav__realProjectsList.classList.remove("hidden");
});

headerNav__realProjects.addEventListener("mouseout", () => {
  headerNav__realProjectsList.classList.add("hidden");
});

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.classList.add("zIndex0");
    home_info__about_title.classList.add("home-info__about-title--active");
    setTimeout(() => {
      home_info__about_text.classList.add("home-info__about-text--active");
      setTimeout(() => {
        home_info__tasks.classList.add("home-info__tasks-block--active");
      }, 200);
    }, 200);
  }, 500);

  //   preloader.classList.add("zIndex0");
});
