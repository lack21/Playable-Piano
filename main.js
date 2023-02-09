// lear
// Piano

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("blurred");

  const switchBtn = document.querySelector(".switch-btn");

  const switcher = document.querySelector(".switcher");
  const circleIcon = document.querySelector(".fa-circle");

  const keys = document.querySelectorAll(".key");
  const spanLetters = document.querySelectorAll(".letter");

  let audio = new Audio("Sound/a.wav");

  // Switching Background Color
  switchBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-body");
    switchBtn.innerHTML =
      switchBtn.innerHTML == '<i class="fa fa-moon-o"></i>'
        ? '<i class="fa fa-sun-o"></i>'
        : '<i class="fa fa-moon-o"></i>';
  });

  // Switcher Letters Visibility
  switcher.addEventListener("click", () => {
    circleIcon.style.transform =
      circleIcon.style.transform == "translateX(36px)"
        ? "translateX(0)"
        : "translateX(36px)";
    keys.forEach((item) => {
      spanLetters.forEach(
        (item) => (item.style.opacity = item.style.opacity == "0" ? "1" : "0")
      );
    });
  });

  // Sound Effects
  keys.forEach((item) => {
    item.addEventListener("click", () => {
      audio.src = `Sound/${item.dataset.key}.wav`;
      audio.play();
    });
  });

  // Sound Effects On Keydown
  document.addEventListener("keydown", (e) => {
    audio.src = `Sound/${e.key}.wav`;
    audio.play();
  });
});
