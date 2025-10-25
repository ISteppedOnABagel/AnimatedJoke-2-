
const bg = document.getElementById('bgAudio');
const punchline = document.getElementById("punchline");
const show = document.getElementById("showPunchline");
const jokeImage = document.getElementById("jokeImage");

//tries to play it automatically but browsers may block it
document.addEventListener('DOMContentLoaded', () => {
  if (bg) {
    bg.loop = true;
    const p = bg.play();
    if (p && p.catch) p.catch(() => {});
  }
});

show.addEventListener("click", function() {
punchline.classList.remove("hidden");
  document.body.style.backgroundColor = "#ffe4b5";
jokeImage.src = "sans-food.png";
punchline.classList.add("pulsing");

//bg songs player
  
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
