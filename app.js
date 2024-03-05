$(document).ready(function() {
    $('#galeria').click(function() {
        $('#orario').slideToggle('slow');
        $('#menos').slideToggle('slow');
    });
});

var mesa = "Visitanos en Nuestro canal de Youtube.";

function mensage() {
    var el = document.getElementById('menos');
    el.textContent = mesa;
}
mensage();

function color(){
    document.getElementById("cuerpo").style.backgroundColor = "#333";
    document.getElementById("boton1").style.display = "none";
    document.getElementById("boton2").style.backgroundColor = "#333";
    document.getElementById("boton2").style.display = "block";
    document.getElementById("work").style.backgroundColor = "#003349";
    document.getElementById("text").style.color = "#fff";
}
function colores(){
    document.getElementById("cuerpo").style.backgroundColor = "#fff";
    document.getElementById("boton1").style.display = "block";
    document.getElementById("boton2").style.display = "none";
    document.getElementById("work").style.backgroundColor = "#fff";
    document.getElementById("text").style.color = "#000";
}
