function my(input) {
  let x = document.querySelector(`#${input}`);
  let y = [...document.querySelector("ul").children];
  y.forEach((e) => e.classList.remove("active"));
  x.classList.add("active");
}
