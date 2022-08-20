// functions to handle if the user yell our not
function normal(message) {
  return message[message.length - 1] == "?" ? "Sure" : "Whatever.";
}

function yell(message) {
  return message[message.length - 1] == "?"
    ? "Calm down, I know what I'm doing!"
    : "Whoa, chill out!";
}

// bot logic
function bot(message) {
  if (message.length == 3 && message.toLowerCase() == "bob") {
    return "Fine. Be that way!";
  }
  return message.toLowerCase() == message ? normal(message) : yell(message);
}
// user message
function user(value) {
  let message = document.createElement("span");
  message.classList.toggle("userMessage");
  message.textContent = value;
  return message;
}
// bot message
function BotMessageBox(value) {
  let container = document.createElement("div");
  let message = document.createElement("span");
  container.classList.add("respond");
  message.classList.add("respondMessage");
  message.textContent = bot(value);
  return container.appendChild(message);
}

let btn = document.querySelector("button");

// click event 
btn.addEventListener("click", () => {
  let value = document.getElementById("messageBox").value;

  let userContainer = document.createElement("div");
  userContainer.setAttribute("id", "user");
  userContainer.appendChild(user(value));

  let botContainer = document.createElement("div");
  botContainer.setAttribute("id", "respond");
  botContainer.appendChild(BotMessageBox(value));

  let messageContainer = document.getElementById("MessageContainer");

  messageContainer.append(userContainer);
  messageContainer.append(botContainer);

  document.getElementById("messageBox").value = "";
});
