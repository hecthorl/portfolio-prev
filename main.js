const toggleMenuBtn = document.querySelector("#burger-container");
const menu = document.querySelector(".navigation");

toggleMenuBtn.onclick = () => {
  menu.classList.toggle("active-menu");
};
menu.onclick = () => menu.classList.remove("active-menu");
