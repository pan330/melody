// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Sample audio player
(function () {
  const player = document.querySelector(".player");
  if (!player) return;

  const playBtn = player.querySelector(".play");
  const seek = player.querySelector(".seek");
  const time = player.querySelector(".time");
  const note = player.querySelector(".player-note");
  const audio = new Audio(player.dataset.src);
  audio.preload = "metadata";

  const fmt = (s) => {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const r = Math.floor(s % 60).toString().padStart(2, "0");
    return m + ":" + r;
  };

  audio.addEventListener("error", () => {
    note.hidden = false;
    playBtn.disabled = true;
    seek.disabled = true;
  });

  audio.addEventListener("timeupdate", () => {
    if (audio.duration) seek.value = (audio.currentTime / audio.duration) * 100;
    time.textContent = fmt(audio.currentTime);
  });

  audio.addEventListener("ended", () => { playBtn.textContent = "▶"; });

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().then(() => { playBtn.textContent = "⏸"; }).catch(() => {});
    } else {
      audio.pause();
      playBtn.textContent = "▶";
    }
  });

  seek.addEventListener("input", () => {
    if (audio.duration) audio.currentTime = (seek.value / 100) * audio.duration;
  });

  // Scroll to the player and play when "Écouter un exemple" is clicked
  document.querySelectorAll('a[href="#exemple"]').forEach((a) => {
    a.addEventListener("click", () => {
      if (audio.paused && !playBtn.disabled) playBtn.click();
    });
  });
})();

// Order form: front-end only. Connect to your backend or payment provider.
(function () {
  const form = document.getElementById("order-form");
  const status = form.querySelector(".form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // TODO: send FormData(form) to your backend / Stripe checkout.
    status.hidden = false;
    status.textContent = "Merci ! Votre demande a bien été prise en compte (démo : aucun envoi réel).";
    form.reset();
  });
})();
