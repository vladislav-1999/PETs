'use strict'

const headerNav__projects = document.querySelector(".header-nav__projects");
const headerNav__projectsList = document.querySelector('.header-nav__projects-list');
const headerNav__stack = document.querySelector(".header-nav__stack");
const headerNnav__stackList = document.querySelector(".header-nav__stack-list");
const headerNav__realProjects = document.querySelector(".header-nav__real-projects");
const headerNav__realProjectsList = document.querySelector(".header-nav__real-projects-list");
const preloader = document.querySelector(".preloader");

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
  setTimeout(() => preloader.classList.add("zIndex0"), 500);
  //   preloader.classList.add("zIndex0");
});
