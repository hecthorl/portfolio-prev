import randomBG from "./randomBG";

const loader = document.querySelector(".loader-dom");
// const btnContainer = document.querySelector("#toBtn");
// const fakeScreen = document.createElement("div");
// const popup = document.createElement("div");
const nav = document.querySelector(".navigation");
// const btnContact = document.querySelector(".navigation button");

const $ = (className) => document.querySelectorAll(className);

document.body.onload = () => {
  console.log("termino la carga");
  document.body.style.overflow = "auto";
  loader.remove();
};

// btnContact.onclick = () => {
//   popup.classList.add("popUp-contact");
//   popup.innerHTML = `<div>
//       <span>info</span>
//       <span>info</span>
//   </div>`;

//   btnContainer.appendChild(popup);

//   fakeScreen.setAttribute("id", "test");
//   document.body.appendChild(fakeScreen);
// };

// fakeScreen.onclick = () => {
//   popup.remove();
//   fakeScreen.remove();
// };

const speedChange = 4e3;

const funcionDeTipoFlecha = (item) => {
  item.style.backgroundColor = randomBG();
};

setInterval(() => {
  $(".circle-1").forEach(funcionDeTipoFlecha);
}, speedChange);
setInterval(() => {
  $(".circle-2").forEach(funcionDeTipoFlecha);
}, speedChange);
setInterval(() => {
  $(".circle-3").forEach(funcionDeTipoFlecha);
}, speedChange);

(() => {
  const isFirefox = navigator.userAgent.includes("Firefox");
  if (isFirefox) nav.classList.add("bg-primary");
})();
