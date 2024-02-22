var gastos = [];
var total = 0;


function guardar(){
    var tipo= document.getElementsByClassName("Tipo");
    var monto = document.getElementsByClassName("Monto");
    var container = document.getElementById("container");
    var totaldoc = document.getElementsByClassName("total");

    gastos= [tipo[0].value, monto[0].value];

    string1 = `Tipo: ${gastos[0]}`;
    string2 = `Total: $${gastos[1]}`;
    var output = document.createElement("div");
    output.className = "cost_container";
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");

    p1.innerText = string1;
    p2.innerText = string2;

    p2.style = "margin-left: auto";

    total += Number(gastos[1]); 
    totaldoc[0].innerText= `total: $${total}`;



    output.appendChild(p1);
    output.appendChild(p2);

    container.appendChild(output);
}