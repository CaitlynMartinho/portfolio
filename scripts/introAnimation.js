const highlight = document.getElementById("highlight");
const words = document.querySelectorAll(".word");
let currentIndex = 0;

// Function to dynamically position the highlight
function updateHighlight(word) {
  const { offsetWidth: width, offsetLeft: left } = word;

  highlight.style.width = `${width}px`;
  highlight.style.left = `${left}px`;
}

// Function to play looping animation
function playLoopingAnimation() {
  setInterval(() => {
    updateHighlight(words[currentIndex]);

    // Move to the next word or loop back to the first word
    currentIndex = (currentIndex + 1) % words.length;
  }, 1200); // Delay between word highlights
}

// Add hover event listeners
words.forEach((word) => {
  word.addEventListener("mouseenter", () => updateHighlight(word));
});

// Start the looping animation
window.onload = playLoopingAnimation;
