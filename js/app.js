/* -------------------------- building nav bar   ------------------------*/
var navbar_list = document.getElementById("navbar-navv");
const itemssections = document.querySelectorAll("section");

buildNavBar = () => {
  navbar_list.innerHTML = "";
  itemssections.forEach((section) => {
    navbar_list.innerHTML += `<a class="nav-item nav-link" id=bu${section.id}>${section.id}</a>`;
  });
};
buildNavBar();

/* -------------------------- handle scrolling  ------------------------*/

const sections = [].slice.call(document.querySelectorAll("section"));

function createObserver(el) {
  let observer;

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(el);
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    let box = entry.target;
    let visible = entry.intersectionRatio;
    if (visible > 0.5) {
      box.classList.add("activesection");
    } else {
      box.classList.remove("activesection");
    }
  });
}

const setup = (sections) => {
  for (let i in sections) {
    const el = sections[i];
    createObserver(el);
  }
};

setup(sections);

/* -------------------------- handle navigation menu------------------------*/
let busection1 = document.querySelector("#busection1");
let busection2 = document.querySelector("#busection2");
let busection3 = document.querySelector("#busection3");
let busection4 = document.querySelector("#busection4");

let buttarr = [busection1, busection2, busection3, busection4];

buttarr.forEach((item) => {
  item.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "busection1":
        document
          .querySelector("#section1")
          .scrollIntoView({ block: "start", behavior: "smooth" });
        break;
      case "busection2":
        document
          .querySelector("#section2")
          .scrollIntoView({ block: "start", behavior: "smooth" });
        break;
      case "busection3":
        document
          .querySelector("#section3")
          .scrollIntoView({ block: "start", behavior: "smooth" });
        break;
      case "busection4":
        document
          .querySelector("#section4")
          .scrollIntoView({ block: "start", behavior: "smooth" });
        break;

      default:
        console.log(`Sorry, we are out of ${e.target.id}.`);
        break;
    }
    event.preventDefault();
  });
});
