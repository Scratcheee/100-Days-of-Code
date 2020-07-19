let currentCount = 0;
const lowerCount = document.getElementById("subtract");
const addCount = document.getElementById("add");
const counter = document.getElementById("count");

function math(num) {
  currentCount += num;
  colorChange();
}

function colorChange() {
  counter.innerText = currentCount;
  if (currentCount < 0) {
    counter.style.color = "#D81B60";
  } else if (currentCount > 0) {
    counter.style.color = "#43A047";
  } else {
    counter.style.color = "#333";
  }
}
lowerCount.addEventListener("click", function () {
  math(-1);
});

addCount.addEventListener("click", function () {
  math(1);
});

reset.addEventListener("click", function () {
  currentCount = 0;
  colorChange();
});
