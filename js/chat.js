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
        const botResponse = getBotResponse(userMessage);
        appendMessage(botResponse, 'bot-message');
        
}

function appendMessage(message, className) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = className;
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // rolar para a parte inferior
}

const getBotResponse = () => {
    const userPrompt = $("#user-input").val();
    const body = `{"query" : "${userPrompt}"}`

    $.ajax({
        type: 'POST',
        url: `${base_url}/query`,
        contentType: 'application/json',
        dataType: 'json',
        data: `{"query" : "${userMessage}"}`,
        success: (response) => {},
        error: (res) => { 
            console.log(res);
        }
    });
}



const sidebar = document.getElementById('sidebar');
        const toggleButton = document.getElementById('sidebar-toggle-btn');

        // Exibir botão de menu apenas em dispositivos pequenos
        window.addEventListener('resize', function() {
            if (window.innerWidth <= 768) {
                toggleButton.style.display = 'block';
            } else {
                toggleButton.style.display = 'none';
                sidebar.classList.remove('show'); // Garantir que a sidebar esteja fechada
            }
        });

        // Mostrar ou ocultar a sidebar quando o botão for clicado
        toggleButton.addEventListener('click', function() {
            sidebar.classList.toggle('show');
        });

        // Simula o comportamento da função resize ao carregar a página
        window.dispatchEvent(new Event('resize'));