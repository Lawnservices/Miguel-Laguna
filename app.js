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