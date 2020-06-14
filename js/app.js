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
let butttolink1 = document.querySelector("#butttolink1");
let butttolink2 = document.querySelector("#butttolink2");
let butttolink3 = document.querySelector("#butttolink3");
let butttolink4 = document.querySelector("#butttolink4");

let buttarr = [butttolink1, butttolink2, butttolink3, butttolink4];

buttarr.forEach((item) => {
  item.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "butttolink1":
        document
          .querySelector("#section1")
          .scrollIntoView({ block: "start", behavior: "smooth" });
        break;
      case "butttolink2":
        document
          .querySelector("#section2")
          .scrollIntoView({ block: "start", behavior: "smooth" });
        break;
      case "butttolink3":
        document
          .querySelector("#section3")
          .scrollIntoView({ block: "start", behavior: "smooth" });
        break;
      case "butttolink4":
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
