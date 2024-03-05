// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener('focus', function() {
    usernameLabel.classList.add('required-popup')

})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener('blur', function() {
    usernameLabel.classList.remove('required-popup')
})

// Validar valor do input

usernameInput.addEventListener('change', function(evento){
    let valor = evento.target.value

    if(valor.length < 4){
        usernameInput.classList.add('error')
        usernameHelper.classList.add('visible')
        usernameInput.classList.remove('correct')
    } else{
        usernameInput.classList.remove('error')
        usernameHelper.classList.remove('visible')
        usernameInput.classList.add('correct')
        
    }



})

let emailInput = document.getElementById('email')
