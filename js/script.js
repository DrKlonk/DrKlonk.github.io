const cardButtons = document.querySelectorAll(".btn--card");
const copyBtn = document.querySelector(".copy-btn");

cardButtons.forEach((cb) => cb.addEventListener("click", flipCard));

function flipCard() {
  let el = this;
  // Find the card that is connected to this button
  while (!el.classList.contains("card")) {
    el = el.parentElement;
  }
  // Toggle class to show the back side
  el.classList.toggle("showBack");
}

var clip = new ClipboardJS(".copy-btn");

clip.on("success", () => {
  copyBtn.classList.add("copied");
  setTimeout(() => {
    copyBtn.classList.remove("copied");
  }, 2000);
});
