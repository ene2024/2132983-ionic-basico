var input = document.getElementsByName("usuario")
var loginButton = document.getElementById('button1')
var signupButton = document.getElementById('button2')

function login(){
    result = document.getElementsByClassName("result")
    result[0].innerHTML = `Login correcto <span class= 'output'>${input[0].value}</span>`
}

function registro(){
    result = document.getElementsByClassName("result")
    result[0].innerHTML = `Registro con éxito <span class= 'output'>${input[0].value}</span>`
}

loginButton.onclick = login;
signupButton.onclick = registro;
