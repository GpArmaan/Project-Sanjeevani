function sendMessage() {
  const input = document.getElementById("userInput");
  const messages = document.getElementById("messages");

  if (input.value.trim() !== "") {
    const userMsg = document.createElement("p");
    userMsg.textContent = "You: " + input.value;
    messages.appendChild(userMsg);

    const botMsg = document.createElement("p");
    botMsg.textContent = "Sanjeevani Bot: I'm here to help with " + input.value;
    messages.appendChild(botMsg);

    input.value = "";
    messages.scrollTop = messages.scrollHeight;
  }
}
