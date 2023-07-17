const drums = document.querySelectorAll(".drum");

drums.forEach((e) => {
  e.addEventListener("click", () => {
    playAudio(e.textContent);
    e.classList.add("pressed");
    setTimeout(() => {
      e.classList.remove("pressed");
    }, 100);
  });
});
document.body.addEventListener("keydown", (press) => {
  playAudio(press.key);
});

function playAudio(param) {
  let sound;
  switch (param) {
    case "w":
      sound = new Audio("./sounds/crash.mp3");
      break;
    case "a":
      sound = new Audio("./sounds/snare.mp3");
      break;
    case "s":
      sound = new Audio("./sounds/kick-bass.mp3");
      break;
    case "d":
      sound = new Audio("./sounds/tom-1.mp3");
      break;
    case "j":
      sound = new Audio("./sounds/tom-2.mp3");
      break;
    case "k":
      sound = new Audio("./sounds/tom-3.mp3");
      break;
    case "l":
      sound = new Audio("./sounds/tom-4.mp3");
      break;
  }
  sound.play();
}
