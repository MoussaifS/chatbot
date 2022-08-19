function normal(message) {
  return message[message.length - 1] == "?" ? "Sure" : "Whatever.";
}

function yell(message) {
  return message[message.length - 1] == "?"
    ? "Calm down, I know what I'm doing!"
    : "Whoa, chill out!";
}

function bot(message) {
  if (message.length == 3 && message.toLowerCase() == "bob") {
    return "Fine. Be that way!";
  } else if (message.toLowerCase() == message) {
    return normal(message);
  } else if (message.toUpperCase() == message) {
    return yell(message);
  }
}

function userMessageBox(value) {
  let container = document.createElement("div");
  let message = document.createElement("span");
  container.classList.add("user");
  message.classList.add("userMessage");
  message.textContent = value;
  return container.appendChild(message);
}

function BotMessageBox(value) {
  let container = document.createElement("div");
  let message = document.createElement("span");
  container.classList.add("respond");
  message.classList.add("respondMessage");
  message.textContent = bot(value);
  return container.appendChild(message);
}

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let value = document.getElementById("messageBox").value;
  let container = document.getElementById("MessageContainer");
  container.appendChild(userMessageBox(value));
  container.appendChild(BotMessageBox(value));
  document.getElementById("messageBox").value = ''
});
