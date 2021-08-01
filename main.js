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
