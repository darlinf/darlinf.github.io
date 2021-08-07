let about = document.querySelector(".about");
let projects = document.querySelector(".projects");
let contact = document.querySelector(".contact");

let aboutA = document.querySelector("#about");
let projectsA = document.querySelector("#projects");
let contactA = document.querySelector("#contact");

aboutA.addEventListener("click", () => {
  about.classList.add("show-categories");
  projects.classList.remove("show-categories");
  contact.classList.remove("show-categories");
});
projectsA.addEventListener("click", () => {
  about.classList.remove("show-categories");
  projects.classList.add("show-categories");
  contact.classList.remove("show-categories");
});
contactA.addEventListener("click", () => {
  about.classList.remove("show-categories");
  projects.classList.remove("show-categories");
  contact.classList.add("show-categories");
});

aboutA.addEventListener("click", () => {
  aboutA.classList.add("link-select");
  projectsA.classList.remove("link-select");
  contactA.classList.remove("link-select");
});
projectsA.addEventListener("click", () => {
  aboutA.classList.remove("link-select");
  projectsA.classList.add("link-select");
  contactA.classList.remove("link-select");
});
contactA.addEventListener("click", () => {
  aboutA.classList.remove("link-select");
  projectsA.classList.remove("link-select");
  contactA.classList.add("link-select");
});

let projectZIndex = document.getElementById("projectZIndex");
let box1 = document.getElementById("box1");
/*box1.addEventListener("mouseenter", () => {
  setTimeout(() => {
    projectZIndex.classList.add("fff2");
    box1.classList.add("box-z-indez");
  }, 1000);
});

box1.addEventListener("mouseleave", () => {
  projectZIndex.classList.remove("fff2");
  box1.classList.remove("box-z-indez");
});*/

let boxes = document.querySelectorAll(".box");

console.log(boxes);
boxes.forEach((item) => {
  let clearTim;
  item.addEventListener("mouseenter", () => {
    clearTim = setTimeout(() => {
      projectZIndex.classList.add("fff2");
      item.classList.add("box-z-indez");
    }, 1000);
  });
  item.addEventListener("mouseleave", () => {
    clearTimeout(clearTim);
    projectZIndex.classList.remove("fff2");
    item.classList.remove("box-z-indez");
  });
});
