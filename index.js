const iconShareEl = document.querySelector("#icon-share");
const authorInfoEl = document.querySelector(".author-info");
const socialIconsEl = document.querySelector(".social-icons");
const cardAuthorEl = document.querySelector(".card-author");

iconShareEl.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    cardAuthorEl.classList.toggle("very-dark-grayish-blue");
    authorInfoEl.classList.toggle("none");
  } else {
    socialIconsEl.classList.toggle("social-icons-position");
  }
  socialIconsEl.classList.toggle("none");
  iconShareEl.classList.toggle("light-grayish-blue");
  iconShareEl.classList.toggle("grayish-blue");
});
