export default function (opacidad = 1) {
  // return Math.floor(Math.random() * 16777215).toString(16);
  const r = () => (Math.random() * 256) >> 0;
  return `rgba(${r()}, ${r()}, ${r()}, ${opacidad})`;
}
