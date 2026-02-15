// State to represent counter value
// let counter = 0;
let counter = JSON.parse(localStorage.getItem("counter")) || 0;

const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");
const counterLabel = document.getElementById("counter-value");

// Update counter state & trigger re-render
function setCounter(newValue) {
  counter = Math.max(0, newValue);
  localStorage.setItem("counter", counter); // Side effect

  renderUI(counter);
}

// Render UI on the basis of latest state value 
// (Pure reflection of state & no side effect)
function renderUI(value) {
  counterLabel.innerText = value;

  decrementBtn.disabled = value === 0;
}

// Attach click event listeners to buttons
incrementBtn.addEventListener("click", () => setCounter(counter + 1));
decrementBtn.addEventListener("click", () => setCounter(counter - 1));
resetBtn.addEventListener("click", () => setCounter(0));

// Handle state updates in case of duplicate tabs
window.addEventListener("storage", event => {
  if (event.key === "counter") {
    counter = Number(event.newValue);
    renderUI(counter);
  }
});

// Render UI for the first time the document is loaded in browser
renderUI(counter);