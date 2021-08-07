const toggleMenuBtn = document.querySelector("#burger-container");
const menu = document.querySelector(".navigation");
const loader = document.querySelector(".loader-dom");
const header = document.querySelector("header");

toggleMenuBtn.onclick = () => {
  menu.classList.add("active-menu");
};
menu.onclick = () => {
  console.log("asdasd");
  menu.classList.remove("active-menu");
};

document.body.onload = () => {
  console.log("termino la carga");
  loader.remove();
};

document.body.onscroll = (e) => {
  const { top, x, y } = header.getBoundingClientRect();
  console.log({ x, y });
  if (!top) {
    header.classList.add("bg-dark");
  } else {
    header.classList.remove("bg-dark");
  }
};
