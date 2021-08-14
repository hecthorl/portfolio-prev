import randomBG from "./randomBG";

const loader = document.querySelector(".loader-dom");
const $ = (className) => document.querySelector(className);

document.body.onload = () => {
  console.log("termino la carga");
  loader.remove();
};

const speedChange = 4e3;

setInterval(() => {
  $(".circle-1").style.backgroundColor = `#${randomBG()}`;
}, speedChange);
setInterval(() => {
  $(".circle-2").style.backgroundColor = `#${randomBG()}`;
}, speedChange);
setInterval(() => {
  $(".circle-3").style.backgroundColor = `#${randomBG()}`;
}, speedChange);

// const d_value = 520;

// header.style.top = `${d_value}px`;
// document.body.onscroll = (e) => {};
