// Grab elements
const selectElement = (select) => {
  const element = document.querySelector(select);

  if (element) {
    return element;
  } else {
    throw new Error(`Element ${select} not found`);
  }
};

//Nav styles on scroll
const scrollHeader = () => {
  const headerElement = selectElement("#header");
  if (this.scrollY >= 15) {
    headerElement.classList.add("activated");
  } else {
    headerElement.classList.remove("activated");
  }
};

window.addEventListener("scroll", scrollHeader);
// Open menu & search pop-up

// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper
