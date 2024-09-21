document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
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
    }

});