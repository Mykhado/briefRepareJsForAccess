let animeBg = document.querySelector(".parallax");
let waves = animeBg.querySelectorAll("use");
console.log(waves);
console.log(animeBg);
animeBg.addEventListener("click", (e) => {
  console.log("c est cliqué ma gueule");
  waves[0].classList.toggle("active");
  waves[1].classList.toggle("active");
  waves[2].classList.toggle("active");
  waves[3].classList.toggle("active");
  console.log(waves);
});
