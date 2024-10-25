const base_url = "http://localhost:8090/user"

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const birthDate = document.getElementById('birthDate').value;
    const password1Field = document.getElementById('password1');
    const password2Field = document.getElementById('password2');
    const errorMessage = document.getElementById('error-message');

    if (password1Field.value != password2Field.value) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "As duas senhas devem ser iguais."

        // Limpar os campos de senha
        password1Field.value = "";
        password2Field.value = "";

    }
    else{
        // manda para o back end
        const body = `{
            "username": "${username}",
            "email" : "${email}",
            "name" : "${name}",
            "lastname" : "${lastName}",
            "password": "${document.getElementById("password1").value}",
            "birthDate" : "${birthDate}"
            }`;

            $.ajax({
                type: 'POST',
                url: `${base_url}/signup`,
                contentType: 'application/json',
                dataType: 'json',
                data: body,
                success: (res) => { 
                    console.log(res);
                    errorMessage.style.display = "none";
                    window.location.href = "index.html";
                },
                error: (res) => {
                    console.log(res);
                    errorMessage.style.display = "block";
                    errorMessage.textContent = "Email ou Usuário já existente";
                    
                     // Foca no campo de username
                    document.getElementById("email").focus();
                } 
            });
    }

});