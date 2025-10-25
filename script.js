//tries to play it automatically but browsers may block it
document.addEventListener('DOMContentLoaded', () => {
  const bg = document.getElementById('bgAudio');
  if (bg) {
    bg.loop = true;
    const p = bg.play();
    if (p && p.catch) p.catch(() => {});
  }
});

document.getElementById("showPunchline").addEventListener("click", function() {
  document.getElementById("punchline").classList.remove("hidden");
  document.body.style.backgroundColor = "#ffe4b5";
  document.getElementById("jokeImage").src = "sans-food.png";
  const punchline = document.getElementById("punchline");
  punchline.classList.add("pulsing");

//bg songs player
  const bg = document.getElementById('bgAudio');
  if (bg) {
    try {
      bg.currentTime = 0;
      const playPromise = bg.play();
      if (playPromise && playPromise.catch) playPromise.catch(() => {});
    } catch (e) {
      // ignore play errors
    }
  }
});
