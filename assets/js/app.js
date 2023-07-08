const browser = window.matchMedia("(max-width: 450px)").matches;

const optionsFieldSet = document.querySelectorAll("fieldset");
console.log(optionsFieldSet[1]);
if (browser) {
  optionsFieldSet[1].classList.add("active");
} else {
  optionsFieldSet[1].classList.remove("active");
}
