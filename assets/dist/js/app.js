let sounds = ["lion", "elephant", "eagle", "bear", "cat"];
sounds.forEach((sound) => {
  let btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  let buttons = document.querySelector(".buttons");
  buttons.appendChild(btn);
  btn.addEventListener("click", () => {
    // you need to use getElementById for those Ids and querySelector won't work!!
    document.getElementById(sound).play();
  });
});
