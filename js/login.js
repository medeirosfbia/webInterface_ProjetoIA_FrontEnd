const base_url = "http://localhost:8090/user"

document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // // Verificação simples para demonstrar
    // if (username === "user" && password === "1234") {
    //     alert("Login bem-sucedido!");
    //     errorMessage.style.display = "none";
    //     window.location.href = "main.html";
    // } else {
    //     errorMessage.style.display = "block";
    //     errorMessage.textContent = "Usuário ou senha incorretos!";
    // }

    const body = `{"username": "${username}", "password": "${password}"}`;
    
    await $.ajax({
        type: 'POST',
        url: `${base_url}/login`,
        contentType: 'application/json',
        dataType: 'json',
        data: body,
        success: (res) => { 
            console.log(res);
            errorMessage.style.display = "none";
            window.location.href = "main.html";
        },
        error: (res) => {
            console.log(res);
            errorMessage.style.display = "block";
            errorMessage.textContent = "Usuário ou senha incorretos!";

            // Limpa os campos de username e password
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            
             // Foca no campo de username
            document.getElementById("username").focus();
        } 
    });
});
