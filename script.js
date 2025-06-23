

// Attach event listeners to all "Add to Cart" buttons
const buttons = document.querySelectorAll(".buy-btn");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    alert(`✅ Product added to cart! (Item #${index + 1})`);
    // You can later extend this to add to localStorage or a real cart system
  });
});

console.log("Interactive Gsms Store loaded");
