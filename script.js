function sendMessage() {
  const input = document.getElementById('userInput');
  const chat = document.getElementById('chat');
  const userText = input.value.trim();
  if (!userText) return;

  chat.innerHTML += `<div><strong>Tu:</strong> ${userText}</div>`;

  // Risposte simulate
  let botResponse = "Non ho capito, ripeti.";
  if (userText.toLowerCase().includes("viti")) {
    botResponse = "Puoi trovare le viti nel reparto ferramenta, corsia 3.";
  } else if (userText.toLowerCase().includes("trapano")) {
    botResponse = "I trapani sono nel reparto elettroutensili, corsia 5.";
  }

  setTimeout(() => {
    chat.innerHTML += `<div><strong>BricoBot:</strong> ${botResponse}</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  input.value = "";
}
