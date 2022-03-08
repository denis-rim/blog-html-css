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
const menuToggleIcon = selectElement("#menu-toggle-icon");

const toggleMenu = () => {
  const mobileElement = selectElement("#menu");
  mobileElement.classList.toggle("activated");
  menuToggleIcon.classList.toggle("activated");
};

menuToggleIcon.addEventListener("click", toggleMenu);

// Open/Close search form popup
const formOpenBtn = selectElement("#search-icon");
const formCloseBtn = selectElement("#form-close-btn");
const searchFormContainer = selectElement("#search-form-container");

formOpenBtn.addEventListener("click", () =>
  searchFormContainer.classList.add("activated")
);

formCloseBtn.addEventListener("click", () =>
  searchFormContainer.classList.remove("activated")
);

// -- Close the search form popup on ESC keypress
window.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    searchFormContainer.classList.remove("activated");
  }
});

// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement("#theme-toggle-btn");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  bodyElement.classList.add("light-theme");
}

themeToggleBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("light-theme");

  if (bodyElement.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light-theme");
  } else {
    localStorage.removeItem("theme");
  }
});

// Swiper
