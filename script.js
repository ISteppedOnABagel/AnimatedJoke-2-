document.getElementById("showPunchline").addEventListener("click", function() {
  document.getElementById("punchline").classList.remove("hidden");
  document.body.style.backgroundColor = "#ffe4b5";
  document.getElementById("jokeImage").src = "punchline.png";
  const punchline = document.getElementById("punchline");
  punchline.style.transform = "scale(1.5)";
  punchline.style.color = "red";
  setTimeout(() => {
    punchline.style.transform = "scale(1)";
    punchline.style.color = "#2e8b57";
  }, 1500);
});
