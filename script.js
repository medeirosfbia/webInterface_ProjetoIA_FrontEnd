document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userMessage = inputField.value;

    if (userMessage.trim() === '') {
        return;
    }

    appendMessage(userMessage, 'user-message');
    inputField.value = '';

    // Simular resposta do chatbot
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        appendMessage(botResponse, 'bot-message');
    }, 1000);
}

function appendMessage(message, className) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = className;
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // rolar para a parte inferior
}

function getBotResponse(userMessage) {
    // Aqui você pode adicionar lógica para gerar respostas mais sofisticadas
    return "Você disse: " + userMessage;
}
