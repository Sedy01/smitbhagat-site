console.log("Hello from script.js!");

// makes heading text turn blue when clicked
document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("h1");
  heading.addEventListener("click", () => {
    heading.style.color = "blue";
  });
});