const base_url = 'http://localhost:5000'

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
    getBotResponse(userMessage);
        
        
}

function appendMessage(message, className) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = className;
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // rolar para a parte inferior
}

const getBotResponse = (userPrompt) => {
    const body = `{"query" : "${userPrompt}"}`;

    $.ajax({
        type: 'POST',
        url: `${base_url}/query`,
        contentType: 'application/json',
        dataType: 'json',
        data: body,
        success: (response) => {
            console.log(response);
            appendMessage(response["answer"], 'bot-message');
        },
        error: (res) => { 
            console.log(res);
        }
    });
};