import randomBG from "./randomBG";

const loader = document.querySelector(".loader-dom");
const $ = (className) => document.querySelectorAll(className);

document.body.onload = () => {
  console.log("termino la carga");
  loader.remove();
};

const speedChange = 4e3;

const funcionDeTipoFlecha = (item) => {
  item.style.backgroundColor = `#${randomBG()}`;
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

// const d_value = 520;

// header.style.top = `${d_value}px`;
// document.body.onscroll = (e) => {};
