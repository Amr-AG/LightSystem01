let butLight = document.querySelector(".but");
let topLight = document.querySelector(".topLight");
let midLight = document.querySelector(".midLight");
let bottomLight = document.querySelector(".bottomLight");
let backLight = document.querySelector(".back");
let clickSound = document.querySelector(".clickSound");

butLight.addEventListener("click", (e) => {
  butLight.classList.toggle("active");
  if (butLight.classList.contains("active")) {
    clickSound.play();
    topLight.classList.add("light");
    midLight.classList.add("light");
    bottomLight.classList.add("light");
    backLight.classList.add("backLight");
  } else {
    clickSound.play();
    topLight.classList.remove("light");
    midLight.classList.remove("light");
    bottomLight.classList.remove("light");
    backLight.classList.remove("backLight");
  }
});
