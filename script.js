document.getElementById("showPunchline").addEventListener("click", function() {
  document.getElementById("punchline").classList.remove("hidden");
  document.body.style.backgroundColor = "#ffe4b5";
  document.getElementById("jokeImage").src = "sans-food.png";
  const punchline = document.getElementById("punchline");
  punchline.classList.add("pulsing");
});
