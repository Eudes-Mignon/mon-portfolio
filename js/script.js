alert("Bienvenue sur mon portfolio !");
console.log("JavaScript fonctionne !");

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Mode clair";
  } else {
    themeBtn.textContent = "Mode sombre";
  }
});