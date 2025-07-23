function changeBackground() {
  const colors = ["#f2f2f2", "#ffb6b9", "#fae3d9", "#bbded6", "#8ac6d1"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
