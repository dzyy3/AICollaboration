const responses = [
  "That’s a beautiful question. What does your first instinct say?",
  "Sometimes the answer arrives when you stop asking.",
  "If you could give advice to someone else asking that, what would you say?",
  "Maybe it isn’t about the answer — maybe it’s about the courage to keep wondering.",
  "Try asking the same question to silence. What does it whisper back?",
  "You already know. You just haven’t trusted that voice yet."
];

document.getElementById("askBtn").addEventListener("click", () => {
  const input = document.getElementById("userQuestion");
  const chatbox = document.getElementById("chatbox");
  const userText = input.value.trim();
  if (!userText) return;

  const userDiv = document.createElement("div");
  userDiv.classList.add("user-text");
  userDiv.textContent = "You: " + userText;
  chatbox.appendChild(userDiv);

  const botDiv = document.createElement("div");
  botDiv.classList.add("bot-text");

  setTimeout(() => {
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    botDiv.textContent = "Mirrorbot: " + randomResponse;
    chatbox.appendChild(botDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
  }, 1000);

  input.value = "";
});
