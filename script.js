function showDate() {
  const date = new Date().toDateString();
  document.body.insertAdjacentHTML("beforeend", `<p class="muted">Today is ${date}</p>`);
}

function init() {
  console.log("Website loaded. Running init()...");

  showDate();
}

document.addEventListener("DOMContentLoaded", init);