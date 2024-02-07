var miVariable =5;
var campoTexto = document.getElementById("texto");
var texto = "";

function miFuncion(x,y){
    alert(y); //Imprime y (Manda notifidaciones a la página)
}

function imprimirTexto(){
    texto = campoTexto.value;
    alert(texto);
}

function borrarTexto(){
    campoTexto.value = ""
}

