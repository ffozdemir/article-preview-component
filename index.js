const iconShareEl = document.querySelector("#icon-share");
const authorInfoEl = document.querySelector(".author-info");
const socialIconsEl = document.querySelector(".social-icons");
const cardAuthorEl = document.querySelector(".card-author");

iconShareEl.addEventListener("click",  () => {
   authorInfoEl.classList.toggle("none");
   socialIconsEl.classList.toggle("none");
   cardAuthorEl.classList.toggle("very-dark-grayish-blue");
   iconShareEl.classList.toggle("light-grayish-blue");
   iconShareEl.classList.toggle("grayish-blue");
});