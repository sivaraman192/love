const loveBtn = document.querySelector(".love-btn");
const proposal = document.querySelector(".proposal");
const finalMessage = document.querySelector(".final-message");

loveBtn.addEventListener("click", () => {
  proposal.style.display = "none";
  finalMessage.style.display = "block";
});
