const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Detect device type
const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// Move "No" button randomly
noBtn.addEventListener("mouseover", () => {
  const speedMultiplier = isMobile ? 2 : 1; // faster on phone
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth * speedMultiplier);
  const newY = Math.floor(Math.random() * questionContainer.offsetHeight * speedMultiplier);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// "Yes" button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();

    // Romantic line
    const loveLine = document.createElement("p");
    loveLine.classList.add("love-line");
    loveLine.innerText = "You’re the reason my heart beats faster every day 💞";
    resultContainer.appendChild(loveLine);
  }, 3000);
});
