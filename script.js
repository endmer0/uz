const botResponses = {
    "salom": "salom, bugun sizga qanday yordam bera olaman?",
    "qalaysan": "Yaxshiman raxmat, qanday yordam bera olaman?",
    "xayr": "xayr salomat bo'ling!",
    "bugun ob-xavo qanaqa": "Ob-xavoni shu saytdan ko'rishingiz mumkun: example.com/weather",
    "nima yangiliklar": "Yangiliklar shu saytda: example.com/news",
    
    // Add more responses as needed
};

function receiveMessage(message) {
    const lowerCaseMessage = message.toLowerCase();
    return botResponses[lowerCaseMessage] || "Sorry, I cannot answer that question.";
}

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const botOutput = receiveMessage(userInput);
    addMessage("user", userInput);
    addMessage("bot", botOutput);
}

function addMessage(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const chatMessage = document.createElement("div");
    chatMessage.classList.add("chat-message", sender === "user" ? "user" : "bot");
    const p = document.createElement("p");
    p.textContent = message;
    chatMessage.appendChild(p);
    chatBox.appendChild(chatMessage);
}

document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("send-button");
    sendButton.addEventListener("click", function() {
        sendMessage();
    });
});
