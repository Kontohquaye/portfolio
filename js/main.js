document.addEventListener("DOMContentLoaded", function () {
  const words = document.querySelectorAll(".cd-words-wrapper b");
  let currentWordIndex = 0;

  function switchWord() {
    // Remove visibility and span from current
    const currentWord = words[currentWordIndex];
    currentWord.classList.remove("is-visible");
    currentWord.innerHTML = currentWord.textContent;

    // Move to next word
    currentWordIndex = (currentWordIndex + 1) % words.length;
    const nextWord = words[currentWordIndex];

    // Wrap each word in span to animate typing
    const span = document.createElement("span");
    span.textContent = nextWord.textContent;
    nextWord.innerHTML = "";
    nextWord.appendChild(span);
    nextWord.classList.add("is-visible");
  }

  // First span wrapping
  const firstSpan = document.createElement("span");
  firstSpan.textContent = words[0].textContent;
  words[0].innerHTML = "";
  words[0].appendChild(firstSpan);

  // Rotate every 4s
  setInterval(switchWord, 4000);
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
