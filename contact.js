const one =  document.getElementById('one');
const year = new Date().getFullYear();
one.textContent = `© ${year} Miguel Laguna Lawn Services. All Rights Reserved`;

 
const nombre = document.getElementById("name");
const telefono = document.getElementById("tel");
const message = document.getElementById("message");
const mensaje = document.getElementById("mensaje");

const form = document.querySelector("form");

// VALIDAR NOMBRE
nombre.addEventListener("input", function () {

    this.value = this.value.replace(/[^A-Za-z\s]/g, "");

    if (this.value.trim().length < 3) {
        this.setCustomValidity("The name must be at least 3 characters long.");
    } 
    else if (this.value.length > 30) {
        this.setCustomValidity("The name is too long.");
    } 
    else {
        this.setCustomValidity("");
    }

});

// VALIDAR TELEFONO
telefono.addEventListener("input", function () {

    this.value = this.value.replace(/[^0-9]/g, "");

    if (this.value.length !== 10) {
        this.setCustomValidity("The number must have 10 digits.");
    } 
    else {
        this.setCustomValidity("");
    }

});

// VALIDAR MENSAJE Y FORMULARIO
form.addEventListener("submit", function (e) {

    mensaje.textContent = "";

    if (nombre.value.trim().length < 3 ||
        nombre.value.length > 30 ||
        telefono.value.length !== 10 ||
        message.value.trim() === "") {

        e.preventDefault();

        if (message.value.trim() === "") {
            mensaje.textContent = "Please enter your message.";
        }
    }

     setTimeout(() => {
        this.reset();
    }, 100);
});
