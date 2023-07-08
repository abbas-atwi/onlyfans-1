const browser = window.matchMedia("(max-width: 450px)").matches;
const moreInfo = document.querySelector(".bio-info a");

const followSybscribe = document.querySelector(".follow-me a");
moreInfo.addEventListener("click", (e) => {
  e.preventDefault();
  alert("jesus ta vendo !!!");
});

followSybscribe.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Captura com a camera frontal !! Jesus esta vendo.. ");
});
const optionsFieldSet = document.querySelectorAll("fieldset");
console.log(optionsFieldSet[1]);
if (browser) {
  optionsFieldSet[1].classList.add("active");
} else {
  optionsFieldSet[1].classList.remove("active");
}
