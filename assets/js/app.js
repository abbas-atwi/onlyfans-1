const browser = window.matchMedia("(max-width: 450px)").matches;
const moreInfo = document.querySelector(".bio-info a");
moreInfo.addEventListener("click", (e) => {
  e.preventDefault();
  alert("jesus ta vendo !!!");
});
const optionsFieldSet = document.querySelectorAll("fieldset");
console.log(optionsFieldSet[1]);
if (browser) {
  optionsFieldSet[1].classList.add("active");
} else {
  optionsFieldSet[1].classList.remove("active");
}
