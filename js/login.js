document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Verificação simples para demonstrar
    if (username === "user" && password === "1234") {
        alert("Login bem-sucedido!");
        errorMessage.style.display = "none";
        window.location.href = "main.html";
    } else {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Usuário ou senha incorretos!";
    }
});
