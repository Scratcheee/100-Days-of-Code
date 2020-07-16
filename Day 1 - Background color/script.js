document.getElementById("myButton").addEventListener("click", function () {
  let randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  console.log(randomColor);
  document.getElementById("hexCode").innerHTML = randomColor;
  document.body.style.backgroundColor = randomColor;
});
