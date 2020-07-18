const btn = document.getElementById("submit");
const message = document.getElementById("message");
const deliveredMessage = document.getElementById("deliveredMessage");

//Create function for changing text
function messagePass() {
  if (message.value) {
    document.getElementById("deliveredMessage").innerText = message.value;
    message.value = "";
  }
}

btn.addEventListener("click", function () {
  messagePass();
});

message.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    messagePass();
  }
});
