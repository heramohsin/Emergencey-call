const heartCountEl = document.getElementById('numbers');
const love = document.getElementsByClassName('love');
let count = 0;

for (const heart of love) {
  heart.addEventListener("click", () => {
    count++; 
    heartCountEl.textContent = count;

    heart.classList.remove("fa-regular");
    heart.classList.add("fa-solid", "text-red-500");
  });
}



coins=100
const coinEl = document.getElementById("coins");

const callButtons = document.querySelectorAll(".btns");

callButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".logo"); 
    const serviceName = card.querySelector("h1").innerText;
    const serviceNumber = card.querySelectorAll("h1")[1].innerText;
    if (coins < 20) {
      alert("Not enough coins! You need at least 20 coins.");
      return;
    }

    alert(`Calling ${serviceName} - ${serviceNumber}`);

    coins -= 20;
    coinEl.textContent = coins;
  });
  });
// --------------copycount--------------
const copyBtn = document.querySelector(".btn-success");
const copyCountSpan = copyBtn.querySelector(".copy");
let copyCount = parseInt(copyCountSpan.textContent) || 0;

copyBtn.addEventListener("click", () => {
  alert("Copied!");
  copyCount++;
  copyCountSpan.textContent = copyCount;
});





