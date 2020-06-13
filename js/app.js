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
